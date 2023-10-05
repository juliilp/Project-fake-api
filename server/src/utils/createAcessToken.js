const jwt = require("jsonwebtoken");

function createAcessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "token123", { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve({ token });
    });
  });
}

module.exports = createAcessToken;
