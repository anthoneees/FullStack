//Navbar.js
import React from "react";
import "../styles/navbar.css";
import "../styles/styles.css";
import SocialStack from "./SocialStack";
// Function that has 2 navbar consts which will be used based on which page to use it for.
function Navbar({ methodType }) {
  //Navigation for landing page, does not contain socials in the navbar.
  const NavbarMain = () => {
    return (
      <header className="flex justify-between items-center py-6 px-[2%] bg-secondary z-50 shadow-lg opacity-90">
        <a href="/">
          <img
            src="./src/assets/logo192-gold.png"
            alt="logo"
            className="h-12"
          />
        </a>

        <nav className="py-0 px-5">
          <ul className="inline-flex">
            <li >
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
    );
  };
  //Navigation bar for the alternate pages, contains social links in the navbar itself.
  const NavbarSide = () => {
    return (
      <header className="flex justify-between items-center py-4 px-[5%] bg-secondary z-50 shadow-lg opacity-90">
        <a href="/">
          <img
            src="./src/assets/logo192-gold.png"
            alt="logo"
            className="h-12"
          />
        </a>

        <nav className="py-0 px-5">
          <ul className="inline-flex">
            <li >
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

        <nav className="">
          <SocialStack methodType={"Horizontal"}/>
        </nav>

      </header>
    );
  };

  return (
    <div>
      {methodType == "Main" ? NavbarMain() : null}
      {methodType == "Side" ? NavbarSide() : null}
    </div>
  );
}

export default Navbar;
