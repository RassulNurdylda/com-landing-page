import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font h-[72px] text-2xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.png" alt="" />
          <span className="ml-3 text-xl">Dolidzon</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
        </nav>
        <button className="inline-flex items-center bg-button-blue text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
          Have a project?
        </button>
      </div>
    </header>
  );
};

export default Navbar;
