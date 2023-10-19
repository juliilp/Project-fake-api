const arrayMercadoPago = [
  {
    titulo: "Crear una orden de pago",
    descripcion:
      "Utiliza esta ruta para crear una orden de pago en Mercado Pago.",
    request:
      "[POST] https://fake-api-project-backend.onrender.com/create-order",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Éxito de pago",
    descripcion:
      "Esta ruta se utiliza para manejar el éxito de una transacción de Mercado Pago.",
    request: "[GET] https://fake-api-project-backend.onrender.com/success",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Error de pago",
    descripcion:
      "Esta ruta se utiliza para manejar errores en transacciones de Mercado Pago.",
    request: "[GET] https://fake-api-project-backend.onrender.com/failure",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Pago pendiente",
    descripcion:
      "Esta ruta se utiliza para manejar pagos pendientes en transacciones de Mercado Pago.",
    request: "[GET] https://fake-api-project-backend.onrender.com/pending",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Webhook de Mercado Pago",
    descripcion:
      "Esta ruta recibe notificaciones de webhook de Mercado Pago para actualizar el estado de las transacciones.",
    request: "[POST] https://fake-api-project-backend.onrender.com/webhook",
    response: "Respuesta no especificada en el README.",
  },
];

export default arrayMercadoPago;
