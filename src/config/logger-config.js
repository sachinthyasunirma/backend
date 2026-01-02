const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize, errors, json, splat } = format;
require("winston-daily-rotate-file");

const consoleFormat = printf(({ timestamp, level, message, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: "logs/%DATE%-app.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d", // Keep logs for 14 days
  level: "info",
});

const errorFileTransport = new transports.DailyRotateFile({
  filename: "logs/%DATE%-error.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "30d",
  level: "error",
});

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(
    errors({ stack: true }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    splat(),
    json()
  ),
  transports: [
    dailyRotateFileTransport,
    errorFileTransport,
    new transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "HH:mm:ss" }),
        consoleFormat
      ),
    }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: "logs/exceptions.log" }),
    new transports.Console({ format: combine(colorize(), consoleFormat) }),
  ],
  rejectionHandlers: [new transports.File({ filename: "logs/rejections.log" })],
  exitOnError: false,
});

module.exports = logger;
