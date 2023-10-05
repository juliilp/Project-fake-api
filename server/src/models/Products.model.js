const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Product = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);
