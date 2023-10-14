import React from "react";

export default function MenuMobile({ switchMenu }) {
  return (
    <>
      {switchMenu && (
        <nav className="md:hidden flex flex-col gap-6 py-4 absolute top-full bg-[#121F3D] w-full">
          <a href="/">Inicio</a>
          <a href="/users">Usuario</a>
          <a href="/productos">Productos</a>
          <a href="/mercadopago">Mercado pago</a>
        </nav>
      )}
    </>
  );
}
