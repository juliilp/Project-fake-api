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
} = require("../controllers/user.controllers");
const authRequired = require("../utils/authRequired");

const userRouter = Router();

userRouter.get("/all", allUser);
userRouter.put("/:id", editUser);
userRouter.post("/create", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/profile", authRequired, profileUser);

/// ADMIN
userRouter.put("/editUser/:id", authRequired, editUserByAdmin);
userRouter.delete("/deleteUser/:id", authRequired, deleteUserByAdmin);
userRouter.delete("/deleteProducto/:id", authRequired, deleteProductByAdmin);
userRouter.put(
  "/editBorradoLogico/:id",
  authRequired,
  editBorradoLogicoByAdmin
);
module.exports = userRouter;
