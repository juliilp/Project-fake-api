const mongoose = require("mongoose");

const Compras = new mongoose.Schema({
  Compra: {
    type: Array,
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Compras", Compras);
