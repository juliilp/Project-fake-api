# README - Rutas de Express

Este README proporciona una descripción general de las rutas definidas en tu aplicación Express. Las rutas son manejadas por controladores que realizan diversas acciones en función de las solicitudes recibidas.

## Contenido

1. [Rutas de Usuarios](#rutas-de-usuarios)
2. [Rutas de Mercado Pago](#rutas-de-mercado-pago)
3. [Rutas de Productos](#rutas-de-productos)
4. [Rutas para Desarollo](#rutas-para-desarrollo)

---

## Rutas de Usuarios

Estas rutas están diseñadas para el manejo de usuarios en tu aplicación.

- **Obtener todos los usuarios:**

  - Método: GET
  - Ruta: `/user/all`
  - Controlador: `allUser`
  - Descripción: Esta ruta permite obtener una lista de todos los usuarios registrados en la aplicación y estan paginados con la query page y limit.

- **Editar un usuario:**

  - Método: PUT
  - Ruta: `/user/:id`
  - Controlador: `editUser`
  - Descripción: Esta ruta permite editar email password y nombre del usuario .

- **Registrar un nuevo usuario:**

  - Método: POST
  - Ruta: `/user/create`
  - Controlador: `registerUser`
  - Descripción: Con ésta ruta podes registrar a un Usuario encriptando su contraseña y creandole un token para inicio de sesión.

- **Iniciar sesión de usuario:**

  - Método: POST
  - Ruta: `/login`
  - Controlador: `loginUser`
  - Descripción: Inicia sesión como usuario utilizando esta ruta.

- **Cerrar sesión de usuario:**

  - Método: GET
  - Ruta: `/logout`
  - Controlador: `logoutUser`
  - Descripción: Cierra la sesión de usuario actual.

- **Ver perfil de usuario:**

  - Método: GET
  - Ruta: `/profile`
  - Controlador: `profileUser`
  - Autenticación requerida
  - Descripción: Esta ruta permite ver el perfil del usuario autenticado.

- **Historial de compras de usuario:**

  - Método: GET
  - Ruta: `/historialCompra`
  - Controlador: `historialComprasUser`
  - Autenticación requerida
  - Descripción: Accede al historial de compras del usuario autenticado.

- **Productos del usuario:**

  - Método: GET
  - Ruta: `/productsUser`
  - Controlador: `productsUser`
  - Autenticación requerida
  - Descripción: Obtiene los productos creados por el usuario autenticado.

### ADMIN

- **Editar usuario por el administrador:**

  - Método: PUT
  - Ruta: `/editUser/:id`
  - Controlador: `editUserByAdmin`
  - Autenticación requerida
  - Requiere ser admin
  - Descripción: Permite al administrador banear al usuario o hacerlo administrador.

- **Eliminar usuario por el administrador:**

  - Método: DELETE
  - Ruta: `/deleteUser/:id`
  - Controlador: `deleteUserByAdmin`
  - Autenticación requerida
  - Requiere ser admin
  - Descripción: Esta ruta permite al administrador eliminar un usuario de la aplicación.

- **Eliminar producto por el administrador:**

  - Método: DELETE
  - Ruta: `/deleteProducto/:id`
  - Controlador: `deleteProductByAdmin`
  - Autenticación requerida
  - Requiere ser admin
  - Descripción: Permite al administrador eliminar un producto de la aplicación.

- **Editar borrado lógico por el administrador:**

  - Método: PUT
  - Ruta: `/editBorradoLogico/:id`
  - Controlador: `editBorradoLogicoByAdmin`
  - Autenticación requerida
  - Requiere ser admin
  - Descripción: Permite al administrador realizar una edición de borrado lógico en un elemento específico.

---

## Rutas de Mercado Pago

Estas rutas están relacionadas con la integración de Mercado Pago en tu aplicación.

- **Crear una orden de pago:**

  - Método: POST
  - Ruta: `/create-order`
  - Controlador: `createOrder`
  - Autenticación requerida
  - Descripción: Utiliza esta ruta para crear una orden de pago en Mercado Pago.

- **Éxito de pago:**

  - Método: GET
  - Ruta: `/sucess`
  - Controlador: `sucess`
  - Descripción: Esta ruta se utiliza para manejar el éxito de una transacción de Mercado Pago.

- **Error de pago:**

  - Método: GET
  - Ruta: `/failure`
  - Controlador: `failure`
  - Descripción: Esta ruta se utiliza para manejar errores en transacciones de Mercado Pago.

- **Pago pendiente:**

  - Método: GET
  - Ruta: `/pending`
  - Controlador: `pending`
  - Descripción: Esta ruta se utiliza para manejar pagos pendientes en transacciones de Mercado Pago.

- **Webhook de Mercado Pago:**

  - Método: POST
  - Ruta: `/webhook`
  - Controlador: `webhook`
  - Descripción: Esta ruta recibe notificaciones de webhook de Mercado Pago para actualizar el estado de las transacciones.

---

## Rutas de Productos

Estas rutas están relacionadas con la gestión de productos en tu aplicación.

- **Obtener todos los productos:**

  - Método: GET
  - Ruta: `/all`
  - Controlador: `getAllProducts`
  - Descripción: Esta ruta permite obtener una lista de todos los productos disponibles en la aplicación.

- **Detalle de producto:**

  - Método: GET
  - Ruta: `/:id`
  - Controlador: `detailProducts`
  - Descripción: Muestra los detalles de un producto específico según su ID.

- **Crear un nuevo producto:**

  - Método: POST
  - Ruta: `/create`
  - Controlador: `createProducts`
  - Autenticación requerida
  - Descripción: Utiliza esta ruta para crear un nuevo producto en la aplicación.

- **Editar un producto:**

  - Método: PUT
  - Ruta: `/:id`
  - Controlador: `editProducts`
  - Autenticación requerida
  - Descripción: Permite editar un producto específico utilizando su ID.

- **Eliminar un producto:**

  - Método: DELETE
  - Ruta: `/:id`
  - Controlador: `deleteProducts`
  - Autenticación requerida
  - Descripción: Elimina un producto de la aplicación utilizando su ID.

---

## Rutas para desarrollo

- **Limpiar base de datos:**

  - Método: DELETE
  - Ruta: /cleardb
  - Controlador: `clearDB`
  - Descripcion: Limpia la base de datos

  **Productos default**

  - Método: GET
  - Ruta: /default
  - Controlado: `datosDefault`
  - Descripcion: Crea una cuenta Admin y llena la DB con 20 productos de https://fakestoreapi.com/products
