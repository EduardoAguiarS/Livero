import React, { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="fixed z-10 w-full">
      {/* Menu */}
      <nav className="px-3 py-5 bg-white">
        <div className="items-center justify-between hidden md:flex md:container md:mx-auto">
          <a href="#" className="flex items-center text-3xl">
            <span className="mr-2 font-bold text-red">Livero</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 20.5 3 C 19.85 3 19.299844 3.42 19.089844 4 L 16 4 C 15.45 3.99 14.990234 4.4302344 14.990234 4.9902344 C 14.980234 5.5402344 15.420703 5.99 15.970703 6 L 19.429688 6 C 20.019687 7.39 21 9.99 21 12 C 21 16 18 18 16 18 L 14 18 C 12.9 18 12 17.1 12 16 L 12 14 L 4 14 C 4 14 1 15 1 18 C 1.36 18.12 2.310625 18.52 3.390625 19 C 2.550625 19.74 2 20.8 2 22 C 2 24.2 3.8 26 6 26 C 8.2 26 10 24.2 10 22 C 10 21.98 9.9902344 21.969219 9.9902344 21.949219 C 10.140234 21.979219 10.289453 22 10.439453 22 L 17.759766 22 C 18.549766 22 19.320859 21.679141 19.880859 21.119141 L 20 21 L 20.140625 21 C 20.060625 21.32 20 21.65 20 22 C 20 24.2 21.8 26 24 26 C 26.2 26 28 24.2 28 22 C 28 21.52 27.900234 21.060859 27.740234 20.630859 L 29 20 C 29 20 27.610469 17.149531 24.730469 16.269531 L 25 16 C 24.94 12.29 22.829922 7.93 21.669922 6 L 23 6 L 23 3 L 20.5 3 z M 4.8007812 3.9003906 C 3.8107813 3.9003906 3 4.7092187 3 5.6992188 L 3 10.199219 C 3 11.189219 3.8107813 12 4.8007812 12 L 10.199219 12 C 11.189219 12 12 11.189219 12 10.199219 L 12 5.6992188 C 12 4.7092187 11.189219 3.9003906 10.199219 3.9003906 L 8 3.9003906 L 8 9 C 8 9.55 7.55 10 7 10 C 6.45 10 6 9.55 6 9 L 6 3.9003906 L 4.8007812 3.9003906 z M 5.6894531 20.029297 C 6.4994531 20.399297 7.0292187 20.639219 7.6992188 20.949219 C 7.8892187 21.249219 8 21.61 8 22 C 8 23.12 7.12 24 6 24 C 4.88 24 4 23.12 4 22 C 4 20.99 4.7294531 20.179297 5.6894531 20.029297 z M 22.269531 21 L 25.730469 21 C 25.900469 21.29 26 21.63 26 22 C 26 23.12 25.12 24 24 24 C 22.88 24 22 23.12 22 22 C 22 21.63 22.099531 21.29 22.269531 21 z"></path>
            </svg>
          </a>
          <ul className="hidden gap-5 md:flex">
            <li className="p-3 text-lg transition ease-in-out delay-75 hover:text-red">
              <button onClick={scrollToTop} className="font-extralight">
                Início
              </button>
            </li>
            <li className="p-3 text-lg transition ease-in-out delay-75 font-extralight hover:text-red">
              <a href="#">Serviços</a>
            </li>
            <li className="p-3 text-lg transition ease-in-out delay-75 font-extralight hover:text-red">
              <a href="#">Cases</a>
            </li>
            <li className="p-3 text-lg transition ease-in-out delay-75 font-extralight hover:text-red">
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu Button*/}
        <div className="flex items-center justify-between md:hidden">
          <a href="#" className="flex items-center text-3xl">
            <span className="mr-2 font-bold text-red">Livero</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 20.5 3 C 19.85 3 19.299844 3.42 19.089844 4 L 16 4 C 15.45 3.99 14.990234 4.4302344 14.990234 4.9902344 C 14.980234 5.5402344 15.420703 5.99 15.970703 6 L 19.429688 6 C 20.019687 7.39 21 9.99 21 12 C 21 16 18 18 16 18 L 14 18 C 12.9 18 12 17.1 12 16 L 12 14 L 4 14 C 4 14 1 15 1 18 C 1.36 18.12 2.310625 18.52 3.390625 19 C 2.550625 19.74 2 20.8 2 22 C 2 24.2 3.8 26 6 26 C 8.2 26 10 24.2 10 22 C 10 21.98 9.9902344 21.969219 9.9902344 21.949219 C 10.140234 21.979219 10.289453 22 10.439453 22 L 17.759766 22 C 18.549766 22 19.320859 21.679141 19.880859 21.119141 L 20 21 L 20.140625 21 C 20.060625 21.32 20 21.65 20 22 C 20 24.2 21.8 26 24 26 C 26.2 26 28 24.2 28 22 C 28 21.52 27.900234 21.060859 27.740234 20.630859 L 29 20 C 29 20 27.610469 17.149531 24.730469 16.269531 L 25 16 C 24.94 12.29 22.829922 7.93 21.669922 6 L 23 6 L 23 3 L 20.5 3 z M 4.8007812 3.9003906 C 3.8107813 3.9003906 3 4.7092187 3 5.6992188 L 3 10.199219 C 3 11.189219 3.8107813 12 4.8007812 12 L 10.199219 12 C 11.189219 12 12 11.189219 12 10.199219 L 12 5.6992188 C 12 4.7092187 11.189219 3.9003906 10.199219 3.9003906 L 8 3.9003906 L 8 9 C 8 9.55 7.55 10 7 10 C 6.45 10 6 9.55 6 9 L 6 3.9003906 L 4.8007812 3.9003906 z M 5.6894531 20.029297 C 6.4994531 20.399297 7.0292187 20.639219 7.6992188 20.949219 C 7.8892187 21.249219 8 21.61 8 22 C 8 23.12 7.12 24 6 24 C 4.88 24 4 23.12 4 22 C 4 20.99 4.7294531 20.179297 5.6894531 20.029297 z M 22.269531 21 L 25.730469 21 C 25.900469 21.29 26 21.63 26 22 C 26 23.12 25.12 24 24 24 C 22.88 24 22 23.12 22 22 C 22 21.63 22.099531 21.29 22.269531 21 z"></path>
            </svg>
          </a>
          <button onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500"
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
          <div className="container py-3 mt-3 rounded-md bg-red md:hidden">
            <ul className="gap-5">
              <li className="py-3 mb-3 text-lg text-center text-white transition ease-in-out delay-75 font-extralight">
                <button onClick={scrollToTop} className="font-extralight">
                  Início
                </button>
              </li>
              <li className="py-3 mb-3 text-lg text-center text-white transition ease-in-out delay-75 font-extralight">
                <a href="#">Serviços</a>
              </li>
              <li className="py-3 mb-3 text-lg text-center text-white transition ease-in-out delay-75 font-extralight">
                <a href="#">Cases</a>
              </li>
              <li className="py-3 text-lg text-center text-white transition ease-in-out delay-75 font-extralight">
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
