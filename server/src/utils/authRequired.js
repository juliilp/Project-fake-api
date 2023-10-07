const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  const token = req.cookies.token; // Solo necesitas acceder a req.cookies.token

  if (!token) {
    return res.status(401).json({ message: "No token, Autorización denegada" });
  }

  jwt.verify(token.token, "token123", (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "Token inválido" });
    }
    req.user = user;
    next();
  });
};

module.exports = authRequired;
