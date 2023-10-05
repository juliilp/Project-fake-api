const { Router } = require("express");
const products = require("./products.route");
const user = require("./user.route");
const datosDefault = require("../controllers/default.controllers");
const clearDB = require("../controllers/cleardb.controller");
const mercadopago = require("./mercadopago.route");
const route = Router();

route.use("/products", products);
route.use("/user", user);
route.use("/mercadopago", mercadopago);
route.get("/default", datosDefault);
route.get("/cleardb", clearDB);

module.exports = route;
