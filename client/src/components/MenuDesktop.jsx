export default function MenuDesktop() {
  return (
    <header className="hidden md:flex gap-6 w-full justify-center items-center  h-28">
      <a
        href="/"
        className="hover:bg-[#576374] p-3   active:text-[#3895F2] duration-300"
      >
        Inicio
      </a>
      <a
        href="/users"
        className="hover:bg-[#576374] p-3   active:text-[#3895F2] duration-300"
      >
        Usuarios
      </a>
      <a
        href="/productos"
        className="hover:bg-[#576374] p-3   active:text-[#3895F2] duration-300"
      >
        Productos
      </a>
      <a
        href="/mercadopago"
        className="hover:bg-[#576374] p-3   active:text-[#3895F2] duration-300"
      >
        Mercado pago
      </a>
    </header>
  );
}
