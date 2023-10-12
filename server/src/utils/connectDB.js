const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_CONNECT } = process.env;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECT);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Error" + error.message);
  }
};

module.exports = connectDB;
