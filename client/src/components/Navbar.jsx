//Navbar.js
import React from "react";
import "../styles/navbar.css";
import "../styles/styles.css";
// Function that has 2 navbar consts which will be used based on which page to use it for.

//Navigation for landing page, does not contain socials in the navbar.
const Navbar = () => {
  return (
    <header className="navbar-container flex items-center bg-secondary z-50 w-full shadow-lg opacity-90 fixed top-0 backdrop-blur-md">
      <div className="flex flex-1">
        <nav className="">
          <ul className="nav_links flex">
            <li>
              <a
                href="/about"
                className="text-white hover-underline-custom inter-custom text-l mr-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-white hover-underline-custom inter-custom text-l mr-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/calendar"
                className="text-white hover-underline-custom inter-custom text-l mr-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                Calendar
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <a href="/">
          <img
            src="./src/assets/logo192-gold.png"
            alt="logo"
            className="h-12"
          />
        </a>
      </div>

      <div className=" flex flex-1">
        <div className="ml-auto">
          <a
            href="https://www.instagram.com/gmumensclubvolleyball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/instagram-icon.png"
              alt="Instagram"
              className="social-image h-6"
            />
          </a>
        </div>
        <div className="">
          <a
            href="https://www.gofundme.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/gofundme-icon.png"
              alt="GoFundMe"
              className="social-image h-6 ml-8"
            />
          </a>
        </div>
        <div>
          <a
            href="https://mason360.gmu.edu/mensvolleyball/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/MasonM_icon.png"
              alt="Mason360"
              className="social-image h-6 ml-8"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
//Navigation bar for the alternate pages, contains social links in the navbar itself.
/*
  const NavbarSide = () => {
    return (
      <header className="flex justify-between items-center py-6 px-[2%] bg-secondary z-50 shadow-lg opacity-90 backdrop-blur-md">
        <a href="/">
          <img
            src="./src/assets/logo192-gold.png"
            alt="logo"
            className="h-12"
          />
        </a>

        <nav className="px-5">
          <ul className="inline-flex">
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
        <SocialStack methodType={"Horizontal"} />
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
*/
export default Navbar;
