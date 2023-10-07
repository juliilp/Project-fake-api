const mercadopago = require("mercadopago");
const Compras = require("../models/Compras.model");
const { MERCADOPAGO_KEY, HOST } = require("../../config");
const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const { id } = req.user;
    mercadopago.configure({
      access_token: MERCADOPAGO_KEY,
    });

    const result = await mercadopago.preferences.create({
      items,
      back_urls: {
        success: `http://localhost:3001/mercadopago/sucess`,
        failure: `http://localhost:3001/mercadopago/failure`,
        pending: `http://localhost:3001/mercadopago/pending`,
      },
      notification_url: `https://764d-2802-8011-3026-3a01-edd9-54f7-e7d8-18ca.ngrok.io/mercadopago/webhook?idUser=${id}`,
    });
    res.status(200).json(result.body.init_point);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sucess = (req, res) => {
  console.log(req.body);
  console.log("HOLA");
  res.send("sucess");
};

const webhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log("soy payment" + payment);
    const { idUser } = req.query;
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log("HOLA");
      console.log(data.body.additional_info.items);
      await Compras.create({
        Compra: data.body.additional_info.items,
        User: idUser,
      });
    }
    res.send("webhook");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const failure = (req, res) => {};
const pending = (req, res) => {};
module.exports = { createOrder, sucess, webhook, failure, pending };
