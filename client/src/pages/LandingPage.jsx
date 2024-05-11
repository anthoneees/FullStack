// LandingPage.js
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import "../styles/landingpage.css";

/*
 * First page viewer sees when opening website.
 * Contains a divbar, as well as text elements acting as a welcome.
 */
function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="landing-page backdrop-blur-sm">
        <div className="flex justify-center items-center h-full">
          <div className="text-center inter-custom">
            <h1 className="text-3xl text-tertiary text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Welcome to Mason Club Volleyball
            </h1>
            <h2 className="text-8xl text-white text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              George Mason's
            </h2>
            <h3 className="text-8xl text-white text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Volleyball Club
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
