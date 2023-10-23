const arrayUsers = [
  {
    titulo: "Todos los usuarios",
    descripcion:
      "Puedes acceder a todos los usuarios y sus respectivas queries de limit y page.",
    request: "[GET] https://fake-api-project-backend.onrender.com/user/all",
    response: {
      cantidad: 1,
      users: [
        {
          _id: "65276e5b86e58dc3ddd67863",
          email: "testadmin@gmail.com",
          password:
            "$2b$10$n5UWbVYQBE1UraHzXuYdN.sI0ZSHzzOf5Fc3xuQT88UoOL3yFoBUi",
          isAdmin: true,
          isBaneable: false,
          __v: 0,
        },
      ],
      totalPages: 1,
      currentPage: 1,
    },
  },
  {
    titulo: "Editar un usuario",
    descripcion:
      "Puedes editar el email, la contraseña y el nombre del usuario.",
    request: "[PUT] https://fake-api-project-backend.onrender.com/user/:id",
    response: {
      _id: "6531d70aab24316e33165ffe",
      nombre: "test1",
      email: "test1@gmail.com",
      password: "$2b$10$yl.si.3uPlW3yF/tugQwsu9.a4SF.QkRLlCGt82Bl.tRbumqG008G",
      isAdmin: false,
      isBaneable: false,
      __v: 0,
    },
  },
  {
    titulo: "Registrar un nuevo usuario",
    descripcion:
      "Con esta ruta, puedes registrar a un usuario encriptando su contraseña y creándole un token para iniciar sesión.",
    request: "[POST] https://fake-api-project-backend.onrender.com/user/create",
    response: {
      id: "6531d70aab24316e33165ffe",
      nombre: "test1",
      email: "test1@gmail.com",
      isAdmin: false,
    },
  },
  {
    titulo: "Iniciar sesión de usuario",
    descripcion: "Inicia sesión como usuario utilizando esta ruta.",
    request: "[POST] https://fake-api-project-backend.onrender.com/user/login",
    response: {
      id: "652770e7d03d675e9f2bfe96",
      nombre: "testmp",
      email: "testmp@gmail.com",
    },
  },
  {
    titulo: "Cerrar sesión de usuario",
    descripcion: "Cierra la sesión de usuario actual.",
    request: "[GET] https://fake-api-project-backend.onrender.com/user/logout",
    response: {
      message: "Cerraste sesión con éxito",
    },
  },
  {
    titulo: "Ver perfil de usuario",
    descripcion: "Esta ruta permite ver el perfil del usuario autenticado.",
    request: "[GET] https://fake-api-project-backend.onrender.com/user/profile",
    response: {
      id: "652770e7d03d675e9f2bfe96",
      nombre: "testmp",
      email: "testmp@gmail.com",
      isAdmin: false,
      isBaneable: false,
    },
  },
  {
    titulo: "Historial de compras de usuario",
    descripcion: "Accede al historial de compras del usuario autenticado.",
    request:
      "[GET] https://fake-api-project-backend.onrender.com/user/historialCompra",
    response: [
      {
        _id: "65216a1ab9962ed35de3bc59",
        Compra: [
          {
            category_id: null,
            description: null,
            id: null,
            picture_url: null,
            quantity: "1",
            title: "testmp3sas",
            unit_price: "25",
          },
          {
            category_id: null,
            description: null,
            id: null,
            picture_url: null,
            quantity: "1",
            title: "item2",
            unit_price: "25",
          },
        ],
        User: "652169e4b9962ed35de3bc2d",
        __v: 0,
      },
    ],
  },
  {
    titulo: "Productos del usuario",
    descripcion: "Obtiene los productos creados por el usuario autenticado.",
    request:
      "[GET] https://fake-api-project-backend.onrender.com/user/productsUser",
    response: [
      {
        _id: "65365776ecaa668a0d68493d",
        title: "prueba2",
        price: 1,
        description: "prueba2",
        category: "prueba2",
        image: "prueba2",
        quantity: 1,
        isVisible: true,
        User: {
          _id: "6531d70aab24316e33165ffe",
          nombre: "julian",
          email: "test1@gmail.com",
          password:
            "$2b$10$bdT94WBoYAJatsW1XLNsqeFlpTIoaBiL3DxET.W6Yd7yl5ZwBQ/re",
          isAdmin: false,
          isBaneable: false,
          __v: 0,
        },
        __v: 0,
      },
    ],
  },
  {
    titulo: "Editar usuario por el administrador",
    descripcion:
      "Permite al administrador banear al usuario o hacerlo administrador.",
    request:
      "[PUT] https://fake-api-project-backend.onrender.com/user/admin/editUser/:id",
    response: {
      editUser: {
        _id: "6536610a20e23040e740f582",
        nombre: "test1",
        email: "test1@gmail.com",
        password:
          "$2b$10$7BIyUWkgcjuPGA11sgIDkuLzfSxtpAAKgohrv0W/vWqyNk0bCIH/e",
        isAdmin: false,
        isBaneable: false,
        __v: 0,
      },
    },
  },
  {
    titulo: "Eliminar usuario por el administrador",
    descripcion:
      "Esta ruta permite al administrador eliminar un usuario de la aplicación.",
    request:
      "[DELETE] https://fake-api-project-backend.onrender.com/user/admin/deleteUser/:id",
    response: {
      UsuarioBorrado: {
        _id: "6536610a20e23040e740f582",
        nombre: "test1",
        email: "test1@gmail.com",
        password:
          "$2b$10$7BIyUWkgcjuPGA11sgIDkuLzfSxtpAAKgohrv0W/vWqyNk0bCIH/e",
        isAdmin: true,
        isBaneable: false,
        __v: 0,
      },
      message: "Borrado con éxito",
    },
  },
  {
    titulo: "Eliminar producto por el administrador",
    descripcion:
      "Permite al administrador eliminar un producto de la aplicación.",
    request:
      "[DELETE] https://fake-api-project-backend.onrender.com/user/admin/deleteProducto/:id",
    response: {
      message: "Producto borrado",
      producto: {
        _id: "6536635420e23040e740f590",
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
  },
  {
    titulo: "Editar borrado lógico por el administrador",
    descripcion:
      "Permite al administrador realizar una edición de borrado lógico en un elemento específico.",
    request:
      "[PUT] https://fake-api-project-backend.onrender.com/user/admin/editBorradoLogico/:id",
    response: {
      message: "Edit con éxito",
    },
  },
];

export default arrayUsers;
