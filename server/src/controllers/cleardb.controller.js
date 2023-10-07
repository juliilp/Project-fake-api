const userModel = require("../models/User.model");
const productModel = require("../models/Products.model");
const comprasModel = require("../models/Compras.model");
const clearDB = async (req, res) => {
  try {
    await userModel.deleteMany({});
    await productModel.deleteMany({});
    await comprasModel.deleteMany({});
    res.status(200).json({ message: "Base de dato limpia" });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

module.exports = clearDB;
