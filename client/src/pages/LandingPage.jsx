// LandingPage.js
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import SocialStackVertical from "../components/Socialstack"

function LandingPage() {
  return (
      <div className="flex items-center justify-center h-screen">
        <Navbar></Navbar>
        <SocialStackVertical></SocialStackVertical>
        <div className="bg-white h-2/6 w-1 absolute left-10 top-20"></div>
        <div className="bg-white h-2/6 w-1 absolute left-10 bottom-4"></div>
        <div className="flex flex-col text-center inter-custom">
          <h1 className="text-3xl text-tertiary text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Welcome to Mason Club Volleyball
          </h1>
          <h2 className="text-8xl text-white text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">George Mason's</h2>
          <h3 className="text-8xl text-white text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Volleyball Club</h3>
        </div>
      </div>
  );
}

export default LandingPage;
