const UserModel = require("../models/User.model");
const userModel = require("../models/User.model");
const createAcessToken = require("../utils/createAcessToken");
const bcrypt = require("bcrypt");
const ProductsModel = require("../models/Products.model");
const ComprasModel = require("../models/Compras.model");
const allUser = async (req, res) => {
  const { limit, page } = req.query;

  const options = {
    page: parseInt(page, 10) || 1,
    limit: parseInt(limit, 10) || 10,
  };
  try {
    const allUser = await userModel.paginate({}, options);
    res.status(200).json({
      cantidad: allUser.totalDocs,
      productos: allUser.docs,
      totalPages: allUser.totalPages,
      currentPage: allUser.page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, nombre } = req.body;

  const findUser = await userModel.findById(id);
  const hashPassword = await bcrypt.hash(password, 10);
  if (!findUser) {
    return res.status(200).json("No se encontró el usuario");
  }

  const editUser = await userModel.findByIdAndUpdate(id, {
    email,
    password: hashPassword,
    nombre,
  });
  res.status(200).json(editUser);
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const findUser = await userModel.find({ email });

    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "El email proporcionado no es válido" });
    }

    if (findUser.length > 0)
      return res.status(201).json({ message: "Ese email ya está en uso" });
    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = await userModel.create({
      nombre,
      email,
      password: hashPassword,
    });
    const userSaved = await createUser.save();

    const token = await createAcessToken({ id: userSaved.id });

    res.cookie("token", token);

    res.status(200).json({
      id: userSaved.id,
      nombre: userSaved.nombre,
      email: userSaved.email,
      isAdmin: userSaved.isAdmin,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      return res.status(400).json({ message: "Email o contraseña incorrecta" });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Email o contraseña incorrecta" });
    }

    const token = await createAcessToken({ id: findUser.id });
    res.cookie("token", token);

    res.status(200).json({
      id: findUser.id,
      nombre: findUser.nombre,
      email: findUser.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });

  return res.status(200).json({ message: "Cerraste sesión con éxito" });
};

const profileUser = async (req, res) => {
  try {
    const { id } = req.user;
    const userFound = await userModel.findById(id);
    if (!userFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({
      id: userFound.id,
      nombre: userFound.nombre,
      email: userFound.email,
      isAdmin: userFound.isAdmin,
      isBaneable: userFound.isBaneable,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const historialComprasUser = async (req, res) => {
  try {
    const { id } = req.user;
    const Historial = await ComprasModel.find({
      User: id,
    }).populate("User");
    res.status(200).json(Historial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const productsUser = async (req, res) => {
  const { id } = req.user;

  const findProduct = await ProductsModel.find({
    User: id,
  }).populate("User");
  if (!findProduct) {
    return res.status(404).json("No hay productos");
  }

  res.status(200).json(findProduct);
};

// ADMIN

const editUserByAdmin = async (req, res) => {
  try {
    const { id } = req.user;
    const idUser = req.params.id;
    const { isAdmin, isBaneable } = req.body;
    const findUser = await UserModel.findById(id);
    if (!findUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    if (findUser.isAdmin === false) {
      return res
        .status(401)
        .json({ message: "Es requerido ser administrador" });
    }

    const editUser = await UserModel.findByIdAndUpdate(idUser, {
      isAdmin,
      isBaneable,
    });
    res.status(200).json({ editUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserByAdmin = async (req, res) => {
  try {
    const { id } = req.user;
    const idUser = req.params.id;
    const userAdmin = await UserModel.findById(id);
    if (userAdmin.isAdmin === false) {
      return res.status(401).json({ message: "Necesitas ser admin" });
    }
    const deleteUser = await UserModel.findByIdAndDelete(idUser);
    if (!deleteUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res
      .status(200)
      .json({ UsuarioBorrado: deleteUser, message: "Borrado con éxito" });
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const deleteProductByAdmin = async (req, res) => {
  try {
    const { id } = req.user;
    const idProducto = req.params.id;

    const findUser = await UserModel.findById(id);
    const findProducto = await ProductsModel.findById(idProducto);
    if (findUser.isAdmin === false) {
      return res.status(401).json({ message: "Sin autorización" });
    }
    if (!findProducto) {
      return res.status(404).json({ message: "El producto no existe" });
    }
    const deleteProducto = await ProductsModel.findByIdAndDelete(idProducto);
    res.status(200).json({
      message: "Producto borrado",
      producto: deleteProducto,
    });
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const editBorradoLogicoByAdmin = async (req, res) => {
  try {
    const { id } = req.user;
    const idProduct = req.params.id;
    const { isVisible } = req.body;
    const findAdmin = await UserModel.findById(id);
    if (findAdmin.isAdmin === false) {
      return res.status(401).json({ message: "Necesitas ser administrador" });
    }
    const findProduct = await ProductsModel.findById(idProduct);
    if (!findProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    await ProductsModel.findByIdAndUpdate(idProduct, {
      isVisible,
    });
    res.status(200).json({ message: "Edit con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  editUser,
  allUser,
  profileUser,
  loginUser,
  logoutUser,
  editUserByAdmin,
  deleteUserByAdmin,
  deleteProductByAdmin,
  editBorradoLogicoByAdmin,
  historialComprasUser,
  productsUser,
};
