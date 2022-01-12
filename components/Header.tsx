import React, { useState, useEffect } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="fixed w-full">
      {/* Header */}
      <header className="bg-blue-500 py-5 px-3">
        <div className="md:container md:mx-auto flex justify-between items-center">
          <p className="font-extralight text-white mr-3">
            Aqui na HubLocal suas ideias se transformam em negócios!
          </p>
          <a
            href="#"
            className="bg-white py-3 px-4 rounded-md hover:bg-emerald-400 hover:text-white transition ease-in-out delay-75 text-center"
          >
            <span>Comece Agora!</span>
          </a>
        </div>
      </header>

      {/* Menu */}
      <nav className="md:container md:mx-auto bg-white py-5 px-3">
        <div className="md:flex justify-between items-center hidden">
          <a href="#" className="text-3xl">
            <span className="text-blue-500 font-bold">Hub</span>
            <span className="text-emerald-400 font-extralight">Local</span>
          </a>
          <ul className="hidden md:flex gap-5">
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
        </div>
        {/* Mobile Menu Button*/}
        <div className="md:hidden flex items-center justify-between">
          <a href="#" className="text-3xl">
            <span className="text-blue-500 font-bold">Hub</span>
            <span className="text-emerald-400 font-extralight">Local</span>
          </a>
          <button onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        {toggleMenu && (
          <div className="bg-blue-500 mt-3 rounded-md py-3 md:hidden">
            <ul className="gap-5">
              <li className="py-3 mb-3 font-extralight text-center text-white transition ease-in-out delay-75 text-lg">
                <a href="#">Início</a>
              </li>
              <li className="py-3 mb-3 font-extralight text-center text-white transition ease-in-out delay-75 text-lg">
                <a href="#">Serviços</a>
              </li>
              <li className="py-3 mb-3 font-extralight text-center text-white transition ease-in-out delay-75 text-lg">
                <a href="#">Cases</a>
              </li>
              <li className="py-3 font-extralight text-center text-white transition ease-in-out delay-75 text-lg">
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
export default Header;
