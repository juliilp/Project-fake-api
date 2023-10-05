const server = require("./src/index");
const connectDB = require("./src/utils/connectDB");
server.listen(3001, () => {
  console.log("Server levantado");
  connectDB();
});
