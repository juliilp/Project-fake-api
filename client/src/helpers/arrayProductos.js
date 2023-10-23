const arrayProductos = [
  {
    titulo: "Obtener todos los productos",
    descripcion:
      "Esta ruta permite obtener una lista de todos los productos disponibles en la aplicación con sus queryes de page y limit.",
    request: "[GET] https://fake-api-project-backend.onrender.com/products/all",
    response: {
      cantidad: 23,
      productos: [
        {
          _id: "653664ff20e23040e740f59b",
          title: "prueba2",
          price: 1,
          description: "prueba2",
          category: "prueba2",
          image: "prueba2",
          quantity: 1,
          isVisible: false,
          User: "653660e120e23040e740f556",
          __v: 0,
        },
        {
          _id: "653684a31b2c61da75510066",
          title: "prueba2",
          price: 1,
          description: "prueba2",
          category: "prueba2",
          image: "prueba2",
          quantity: 1,
          isVisible: true,
          User: "653660e120e23040e740f556",
          __v: 0,
        },
      ],
      totalPages: 3,
      currentPage: 3,
    },
  },
  {
    titulo: "Detalle de producto",
    descripcion: "Muestra los detalles de un producto específico según su ID.",
    request: "[GET] https://fake-api-project-backend.onrender.com/products/:id",
    response: {
      _id: "653684a31b2c61da75510066",
      title: "prueba2",
      price: 1,
      description: "prueba2",
      category: "prueba2",
      image: "prueba2",
      quantity: 1,
      isVisible: true,
      User: "653660e120e23040e740f556",
      __v: 0,
    },
  },
  {
    titulo: "Crear un nuevo producto",
    descripcion:
      "Utiliza esta ruta para crear un nuevo producto en la aplicación.",
    request:
      "[POST] https://fake-api-project-backend.onrender.com/products/create",
    response: {
      productoCreado: {
        title: "prueba2",
        price: 1,
        description: "prueba2",
        category: "prueba2",
        image: "prueba2",
        quantity: 1,
        isVisible: true,
        User: "653660e120e23040e740f556",
        _id: "653684a41b2c61da75510068",
        __v: 0,
      },
    },
  },
  {
    titulo: "Editar un producto",
    descripcion:
      "Permite editar title, price, description, category, image, quantity de un producto específico utilizando su ID.",
    request: "[PUT] https://fake-api-project-backend.onrender.com/products/:id",
    response: {
      _id: "653684a31b2c61da75510066",
      title: "prueba2",
      price: 1,
      description: "prueba2",
      category: "prueba2",
      image: "prueba2",
      quantity: 1,
      isVisible: true,
      User: "653660e120e23040e740f556",
      __v: 0,
    },
  },
  {
    titulo: "Eliminar un producto",
    descripcion: "Elimina un producto de la aplicación utilizando su ID.",
    request:
      "[DELETE] https://fake-api-project-backend.onrender.com/products/:id",
    response: {
      _id: "653684a31b2c61da75510066",
      title: "prueba2",
      price: 1,
      description: "prueba2",
      category: "prueba2",
      image: "prueba2",
      quantity: 1,
      isVisible: true,
      User: "653660e120e23040e740f556",
      __v: 0,
    },
  },
];

export default arrayProductos;
