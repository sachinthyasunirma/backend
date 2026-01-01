const express = require("express");
const { PORT } = require("./config");

const app = express();

app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
