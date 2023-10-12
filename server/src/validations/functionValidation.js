const functionValidation = (validation) => (req, res, next) => {
  try {
    validation.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors.map((e) => e.message) });
  }
};

module.exports = functionValidation;
