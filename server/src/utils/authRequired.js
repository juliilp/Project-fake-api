const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token.token) {
    res.status(201).json({ message: "No token,Autorización denegada" });
  }

  jwt.verify(token.token, "token123", (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "Token invalido" });
    }
    req.user = user;
    next();
  });
};

module.exports = authRequired;
