const arrayUsers = [
  {
    titulo: "Todos los usuarios",
    descripcion:
      "Podes acceder a todos los usuarios y con su respectivas queryes de limit y page",
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
];

export default arrayUsers;
