const { Router } = require("express");
const {
  createOrder,
  sucess,
  webhook,
} = require("../controllers/mercadopago.controllers");
const mercadopago = Router();

mercadopago.get("/create-order", createOrder);
mercadopago.get("/sucess", sucess);
mercadopago.get("/webhook", webhook);

module.exports = mercadopago;
