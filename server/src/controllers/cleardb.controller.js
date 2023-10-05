const userModel = require("../models/User.model");
const productModel = require("../models/Products.model");

const clearDB = async (req, res) => {
  try {
    await userModel.deleteMany({});
    await productModel.deleteMany({});
    res.status(200).json({ message: "Base de dato limpia" });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

module.exports = clearDB;
