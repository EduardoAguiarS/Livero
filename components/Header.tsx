function Header() {
  return (
    <div className="fixed w-full">
      <header className="bg-blue-500 py-5 ">
        <div className="md:container md:mx-auto mx-3 flex justify-between items-center">
          <p className="font-extralight text-white">
            Aqui na HubLocal suas ideias se transformam em negócios!
          </p>
          <a
            href="#"
            className="bg-white py-3 px-4 rounded-md hover:bg-emerald-400 hover:text-white transition ease-in-out delay-75"
          >
            <span>Comece Agora!</span>
          </a>
        </div>
      </header>
      <nav className="md:container md:mx-auto mx-3 bg-white py-5 flex justify-between items-center">
        <a href="#" className="text-3xl">
          <span className="text-blue-500 font-bold">Hub</span>
          <span className="text-emerald-400 font-extralight">Local</span>
        </a>
        <ul className="flex gap-5">
          <li className="p-3 font-extralight hover:text-blue-500 transition ease-in-out delay-75 text-lg">
            <a href="#">Início</a>
          </li>
          <li className="p-3 font-extralight hover:text-blue-500 transition ease-in-out delay-75 text-lg">
            <a href="#">Serviços</a>
          </li>
          <li className="p-3 font-extralight hover:text-blue-500 transition ease-in-out delay-75 text-lg">
            <a href="#">Cases</a>
          </li>
          <li className="p-3 font-extralight hover:text-blue-500 transition ease-in-out delay-75 text-lg">
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
