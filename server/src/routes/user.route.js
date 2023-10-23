const { Router } = require("express");
const {
  allUser,
  editUser,
  registerUser,
  loginUser,
  profileUser,
  editUserByAdmin,
  deleteUserByAdmin,
  logoutUser,
  deleteProductByAdmin,
  editBorradoLogicoByAdmin,
  historialComprasUser,
  productsUser,
} = require("../controllers/user.controllers");
const authRequired = require("../utils/authRequired");
const functionValidation = require("../validations/functionValidation");
const {
  registerValidation,
  loginValidation,
} = require("../validations/userValidations");
const userRouter = Router();

userRouter.get("/all", allUser);
userRouter.put("/:id", functionValidation(registerValidation), editUser);
userRouter.post(
  "/create",
  functionValidation(registerValidation),
  registerUser
);
userRouter.post("/login", functionValidation(loginValidation), loginUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/profile", authRequired, profileUser);
userRouter.get("/historialCompra", authRequired, historialComprasUser);
userRouter.get("/productsUser", authRequired, productsUser);
/// ADMIN
userRouter.put("/admin/editUser/:id", authRequired, editUserByAdmin);
userRouter.delete("/admin/deleteUser/:id", authRequired, deleteUserByAdmin);
userRouter.delete(
  "/admin/deleteProducto/:id",
  authRequired,
  deleteProductByAdmin
);
userRouter.put(
  "/admin/editBorradoLogico/:id",
  authRequired,
  editBorradoLogicoByAdmin
);
module.exports = userRouter;
