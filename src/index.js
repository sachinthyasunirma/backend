const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoute = require("./routes");

const app = express();

app.use("/api", apiRoute);

app.listen(ServerConfig.PORT, () => {
  console.log(`server has started on port ${ServerConfig.PORT}`);
  Logger.info("successufully started the server");
});
