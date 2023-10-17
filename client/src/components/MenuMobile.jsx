import React from "react";

export default function MenuMobile({ switchMenu }) {
  return (
    <>
      {switchMenu && (
        <nav className="md:hidden flex flex-col gap-6 pt-8 pb-12 absolute top-full w-full bg-gradient-to-r  from-[#171a4a] to-[#04086e]">
          <a href="/">Inicio</a>
          <a href="/users">Usuario</a>
          <a href="/productos">Productos</a>
          <a href="/mercadopago">Mercado pago</a>
        </nav>
      )}
    </>
  );
}
