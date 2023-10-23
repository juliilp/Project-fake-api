const { Router } = require("express");
const products = Router();
const {
  getAllProducts,
  createProducts,
  detailProducts,
  editProducts,
  getProductsForUser,
  deleteProducts,
} = require("../controllers/products.controllers");
const authRequired = require("../utils/authRequired");
const functionValidation = require("../validations/functionValidation");
const ProductValidation = require("../validations/productsValidations");
products.get("/all", getAllProducts);
products.get("/:id", detailProducts);
products.post(
  "/create",
  authRequired,
  functionValidation(ProductValidation),
  createProducts
);
products.put("/:id", authRequired, editProducts);
products.delete("/:id", authRequired, deleteProducts);
module.exports = products;
