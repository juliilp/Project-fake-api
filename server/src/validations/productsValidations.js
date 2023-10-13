const { z } = require("zod");

const ProductValidation = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }),
  price: z.number({
    required_error: "El numero es requerido",
  }),
  description: z.string({
    required_error: "La descripcion es requerida",
  }),
  category: z.string({
    required_error: "La categoria es requerida",
  }),
  image: z.string({
    required_error: "La imagen es requerida",
  }),
  quantity: z.number({
    required_error: "La cantidad es requerida",
  }),
});

module.exports = ProductValidation;
