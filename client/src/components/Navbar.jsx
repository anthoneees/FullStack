import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-16 w-screen m-0 flex bg-gray-50 border-gray-200 text-white dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <a href="/" className="text-white p-3 hover:bg-gray-800">
        Home
      </a>
      <a href="/about" className="text-white p-3 hover:bg-gray-800">
        About
      </a>
      <a href="/events" className="text-white p-3 hover:bg-gray-800">
        Events
      </a>
      <a href="/calendar" className="text-white p-3 hover:bg-gray-800">
        Calendar
      </a>
    </div>
  );
};

export default Navbar;
