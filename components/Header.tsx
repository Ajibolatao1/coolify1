"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyLogo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-slate-400">
            Home
          </a>
          <a href="#" className="hover:text-slate-400">
            About
          </a>
          <a href="#" className="hover:text-slate-400">
            Services
          </a>
          <a href="#" className="hover:text-slate-400">
            Contact
          </a>
        </nav>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-700">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <a href="#" className="hover:text-slate-400">
              Home
            </a>
            <a href="#" className="hover:text-slate-400">
              About
            </a>
            <a href="#" className="hover:text-slate-400">
              Services
            </a>
            <a href="#" className="hover:text-slate-400">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
