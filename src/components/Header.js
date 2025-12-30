
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoSettings } from 'react-icons/io5';

const Header = ({ themeHandler }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative">

          {/* SETTINGS ICON */}
          <div
            className="gradient my-2 p-4 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <IoSettings className="text-3xl text-black animate-spin-slow hover:scale-110 transition-transform" />
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute top-16 left-0 w-32 bg-black rounded-lg !text-white shadow-lg border z-50">
              <button
                onClick={() => {
                  themeHandler("site");
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left rounded hover:bg-red-500"
              >
                Default
              </button>

              <button
                onClick={() => {
                  themeHandler("dark");
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-800"
              >
                Dark
              </button>

                <button
                onClick={() => {
                  themeHandler("cosmo");
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-purple-700"
              >
                Cosmo
              </button>

              <button
                onClick={() => {
                  themeHandler("white");
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-400"
              >
                White
              </button>
            </div>
          )}

          {/* HIRE ME BUTTON */}
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-sm">Hire me</button>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
