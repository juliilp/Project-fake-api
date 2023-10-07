const express = require("express");
const cors = require("cors");
const route = require("./routes/index.route");
const server = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

server.use(express.json());
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use("/", route);
module.exports = server;
