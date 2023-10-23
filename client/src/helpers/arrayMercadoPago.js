const arrayMercadoPago = [
  {
    titulo: "Crear una orden de pago",
    descripcion:
      "Utiliza esta ruta para crear una orden de pago en Mercado Pago.",
    request:
      "[POST] https://fake-api-project-backend.onrender.com/create-order",
    response:
      "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1494563427-8d8c7142-1aa8-4c8c-8659-2bfe33cbed67",
  },
  {
    titulo: "Éxito de pago",
    descripcion:
      "Esta ruta se utiliza para manejar el éxito de una transacción de Mercado Pago.",
    request: "[GET] https://fake-api-project-backend.onrender.com/success",
    response: "A editar según gusto",
  },
  {
    titulo: "Error de pago",
    descripcion:
      "Esta ruta se utiliza para manejar errores en transacciones de Mercado Pago.",
    request: "[GET] https://fake-api-project-backend.onrender.com/failure",
    response: "A editar según gusto",
  },
  {
    titulo: "Pago pendiente",
    descripcion:
      "Esta ruta se utiliza para manejar pagos pendientes en transacciones de Mercado Pago.",
    request: "[GET] https://fake-api-project-backend.onrender.com/pending",
    response: "A editar según gusto",
  },
];

export default arrayMercadoPago;
