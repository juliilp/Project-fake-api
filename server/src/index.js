const express = require("express");
const cors = require("cors");
const route = require("./routes/index.route");
const server = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/", route);
module.exports = server;
