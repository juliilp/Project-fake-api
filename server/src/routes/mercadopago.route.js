const { Router } = require("express");
const {
  createOrder,
  sucess,
  webhook,
  failure,
  pending,
} = require("../controllers/mercadopago.controllers");
const mercadopago = Router();
const authRequired = require("../utils/authRequired");

mercadopago.post("/create-order", authRequired, createOrder);
mercadopago.get("/sucess", sucess);
mercadopago.get("/failure", failure);
mercadopago.get("/pending", pending);
mercadopago.post("/webhook", webhook);

module.exports = mercadopago;
