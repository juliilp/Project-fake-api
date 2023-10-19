const arrayUsers = [
  {
    titulo: "Todos los usuarios",
    descripcion:
      "Puedes acceder a todos los usuarios y sus respectivas queries de limit y page.",
    request: "[GET] https://fake-api-project-backend.onrender.com/user/all",
    response: [
      {
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
    ],
  },
  {
    titulo: "Editar un usuario",
    descripcion:
      "Puedes editar el email, la contraseña y el nombre del usuario.",
    request: "[PUT] https://fake-api-project-backend.onrender.com/user/:id",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Registrar un nuevo usuario",
    descripcion:
      "Con esta ruta, puedes registrar a un usuario encriptando su contraseña y creándole un token para iniciar sesión.",
    request: "[POST] https://fake-api-project-backend.onrender.com/user/create",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Iniciar sesión de usuario",
    descripcion: "Inicia sesión como usuario utilizando esta ruta.",
    request: "[POST] https://fake-api-project-backend.onrender.com/login",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Cerrar sesión de usuario",
    descripcion: "Cierra la sesión de usuario actual.",
    request: "[GET] https://fake-api-project-backend.onrender.com/logout",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Ver perfil de usuario",
    descripcion: "Esta ruta permite ver el perfil del usuario autenticado.",
    request: "[GET] https://fake-api-project-backend.onrender.com/profile",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Historial de compras de usuario",
    descripcion: "Accede al historial de compras del usuario autenticado.",
    request:
      "[GET] https://fake-api-project-backend.onrender.com/historialCompra",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Productos del usuario",
    descripcion: "Obtiene los productos creados por el usuario autenticado.",
    request: "[GET] https://fake-api-project-backend.onrender.com/productsUser",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Editar usuario por el administrador",
    descripcion:
      "Permite al administrador banear al usuario o hacerlo administrador.",
    request: "[PUT] https://fake-api-project-backend.onrender.com/editUser/:id",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Eliminar usuario por el administrador",
    descripcion:
      "Esta ruta permite al administrador eliminar un usuario de la aplicación.",
    request:
      "[DELETE] https://fake-api-project-backend.onrender.com/deleteUser/:id",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Eliminar producto por el administrador",
    descripcion:
      "Permite al administrador eliminar un producto de la aplicación.",
    request:
      "[DELETE] https://fake-api-project-backend.onrender.com/deleteProducto/:id",
    response: "Respuesta no especificada en el README.",
  },
  {
    titulo: "Editar borrado lógico por el administrador",
    descripcion:
      "Permite al administrador realizar una edición de borrado lógico en un elemento específico.",
    request:
      "[PUT] https://fake-api-project-backend.onrender.com/editBorradoLogico/:id",
    response: "Respuesta no especificada en el README.",
  },
];

export default arrayUsers;
