const createOrder = (req, res) => {
  res.send("creando orden");
};

const sucess = (req, res) => {
  res.send("sucess");
};

const webhook = (req, res) => {
  res.send("webhook");
};

module.exports = { createOrder, sucess, webhook };
