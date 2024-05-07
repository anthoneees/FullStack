//Navbar.js
import React from "react";
import "../styles/navbar.css";
import "../styles/styles.css";

function Navbar({ methodType }) {
  const NavbarMain = () => {
    return (
      <div>
        <header className="fixed top-0 left-0 w-full bg-secondary py-4 px-6 z-50 shadow-lg opacity-90">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center justify-between font-bold"
              >
                <img
                  src="./src/assets/logo192-gold.png"
                  alt="logo"
                  className="h-8 mr-2"
                />
              </a>
            </div>
            <ul className="flex space-x-4 ">
              <li>
                <a
                  href="/about"
                  className="text-white p-3 hover-underline-custom inter-custom text-xl"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-white p-3 hover-underline-custom inter-custom text-xl"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/calendar"
                  className="text-white p-3 hover-underline-custom inter-custom text-xl"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </nav>
        </header>
        ;
      </div>
    );
  };
  const NavbarSide = () => {
    return (
      <div>
        <header className="fixed top-0 left-0 w-full bg-secondary py-4 px-6 z-50 shadow-lg opacity-90">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center justify-between font-bold"
              >
                <img
                  src="./src/assets/logo192-gold.png"
                  alt="logo"
                  className="h-8 mr-2"
                />
              </a>
            </div>
            <ul className="flex space-x-4 ">
              <li>
                <a
                  href="/about"
                  className="text-white p-3 hover-underline-custom inter-custom text-xl"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-white p-3 hover-underline-custom inter-custom text-xl"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/calendar"
                  className="text-white p-3 hover-underline-custom inter-custom text-xl"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  };

  return (
    <div>
      {methodType == "NavbarMain" ? NavbarMain() : null}
      {methodType == "NavbarSide" ? NavbarSide() : null}
    </div>
  );
}

export default Navbar;
