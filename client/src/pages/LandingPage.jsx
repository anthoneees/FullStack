// LandingPage.js
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";

function LandingPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Navbar></Navbar>
        <div className="bg-white h-2/6 w-1 absolute left-10 top-20"></div>
        <div className="bg-white h-2/6 w-1 absolute left-10 bottom-20"></div>
        <div className="flex flex-col text-center inter-custom">
          <h1 className="text-3xl text-tertiary">
            Welcome to Mason Club Volleyball
          </h1>
          <h2 className="text-8xl text-white">George Mason's</h2>
          <h3 className="text-8xl text-white">Volleyball Club</h3>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
