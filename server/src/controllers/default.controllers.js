const UserModel = require("../models/User.model");
const ProductModels = require("../models/Products.model");
const axios = require("axios");
const bcrypt = require("bcrypt");
const datosDefault = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash("1234", 10);
    await UserModel.create({
      name: "julian",
      email: "testadmin@gmail.com",
      password: hashPassword,
      isAdmin: true,
    });

    /////////////////////////////////////////////////////////////////////////////////

    const result = await axios.get("https://fakestoreapi.com/products");
    const productosDefault = result.data;
    productosDefault.map(async (p) => {
      await ProductModels.create({
        title: p.title,
        price: p.price,
        description: p.description,
        category: p.category,
        image: p.image,
        quantity: 1,
      });
    });

    res.status(200).json({ message: "Default ya configurado 👌" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = datosDefault;
