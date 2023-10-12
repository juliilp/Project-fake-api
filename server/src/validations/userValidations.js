const { z } = require("zod");

const registerValidation = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email es inválido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerido",
    })
    .min(6, {
      message: "Minimo 6 caracteres",
    }),
});

const loginValidation = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email es inválido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerido",
    })
    .min(6, {
      message: "Minimo 6 caracteres",
    }),
});

module.exports = { registerValidation, loginValidation };
