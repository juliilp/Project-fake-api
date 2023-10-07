const { config } = require("dotenv");
config();

const MERCADOPAGO_KEY = process.env.MERCADOPAGO_TOKEN;
const PORT = 3001;
const HOST = `http://localhost:${PORT}`;

module.exports = { MERCADOPAGO_KEY, HOST };
