const { config } = require("dotenv");
config();

const MERCADOPAGO_KEY = process.env.MERCADOPAGO_TOKEN;
const HOST = `https://fake-api-project-backend.onrender.com/`;
module.exports = { MERCADOPAGO_KEY, HOST };
