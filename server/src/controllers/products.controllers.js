const ProductsModel = require("../models/Products.model");
const axios = require("axios");

const getAllProducts = async (req, res) => {
  try {
    const { search, page, limit } = req.query;

    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
    };

    if (!search) {
      const allProduct = await ProductsModel.paginate({}, options);
      res.status(200).json({
        cantidad: allProduct.totalDocs,
        productos: allProduct.docs,
        totalPages: allProduct.totalPages,
        currentPage: allProduct.page,
      });
    } else {
      const searchRegex = new RegExp(search, "i"); // 'i' indica que la búsqueda sea insensible a mayúsculas/minúsculas
      const ProductFilter = await ProductsModel.paginate(
        { title: { $regex: searchRegex } },
        options
      );
      res.status(200).json({
        cantidad: ProductFilter.totalDocs,
        productos: ProductFilter.docs,
        totalPages: ProductFilter.totalPages,
        currentPage: ProductFilter.page,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProducts = async (req, res) => {
  const { title, price, description, category, image, quantity } = req.body;
  try {
    const createProduct = await ProductsModel.create({
      title,
      price,
      description,
      category,
      image,
      quantity,
      User: req.user.id,
    });
    res.status(200).json({ productoCreado: createProduct });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

const detailProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await ProductsModel.findById(id);
    if (!findProduct) {
      return res.status(404).json({ message: "No se encontró el producto" });
    }

    res.status(200).json(findProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, description, category, image, quantity } = req.body;

    const findProduct = await ProductsModel.findById(id);
    if (!findProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    const productoActualizado = await ProductsModel.findByIdAndUpdate(id, {
      title,
      price,
      description,
      category,
      image,
      quantity,
    });

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductsForUser = async (req, res) => {
  const userId = req.user._id;
  try {
    const Products = await ProductsModel.find({
      User: userId,
    }).populate("User");
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductsModel.findByIdAndDelete(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAllProducts,
  createProducts,
  detailProducts,
  editProducts,
  getProductsForUser,
  deleteProducts,
};
