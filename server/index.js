const server = require("./src/index");
const connectDB = require("./src/utils/connectDB");
require("dotenv").config();

server.listen(process.env.PORT, () => {
  console.log("Server levantado en " + process.env.PORT);
  connectDB();
});
