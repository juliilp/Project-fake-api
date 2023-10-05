const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const User = new mongoose.Schema({
  nombre: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBaneable: {
    type: Boolean,
    default: false,
  },
});

User.plugin(mongoosePaginate);

module.exports = mongoose.model("User", User);
