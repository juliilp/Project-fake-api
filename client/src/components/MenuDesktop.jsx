export default function MenuDesktop() {
  return (
    <header className="hidden md:flex gap-6 w-full justify-center items-center  h-28">
      <a href="/">Inicio</a>
      <a href="/users">Usuarios</a>
      <a href="/productos">Productos</a>
      <a href="/mercadopago">Mercado pago</a>
    </header>
  );
}
