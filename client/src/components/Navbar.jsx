// Updated Navbar.js
import React, { useState } from "react";
import "../styles/navbar.css";
import "../styles/styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-container bg-secondary shadow-lg opacity-90 fixed top-0 backdrop-blur-md w-full z-50">
      <div className="w-full flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src="/logo192-gold.png" alt="logo" className="h-12" />
          </a>
        </div>

        {/* Center: Nav links */}
        <div
          id="navbar-links"
          className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} w-full md:w-auto justify-center`}
        >
          <nav className="w-full md:w-auto flex justify-center">
            <ul className="nav_links flex flex-col md:flex-row items-center md:space-x-8">
              <li>
                <a
                  href="/about"
                  className="text-white hover-underline-custom inter-custom text-l py-2 md:py-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-white hover-underline-custom inter-custom text-l py-2 md:py-0"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/calendar"
                  className="text-white hover-underline-custom inter-custom text-l py-2 md:py-0"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Burger icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 ml-auto"
          aria-controls="navbar-links"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Right: Social icons */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://www.instagram.com/gmumensclubvolleyball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram-icon.png"
              alt="Instagram"
              className="social-image h-6"
            />
          </a>
          <a
            href="https://www.gofundme.com/f/help-the-gmu-mens-club-volleyball-team-make-it-to-nationals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/gofundme-icon.png"
              alt="GoFundMe"
              className="social-image h-6"
            />
          </a>
          <a
            href="https://mason360.gmu.edu/mensvolleyball/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/MasonM_icon.png"
              alt="Mason360"
              className="social-image h-6"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
