// LandingPage.js
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import "../styles/landingpage.css";
import Footer from "../components/Footer"

/*
 * First page viewer sees when opening website.
 * Contains a divbar, as well as text elements acting as a welcome.
 */
function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="flex w-full h-screen justify-center">
        <div className="bg-white h-full"></div>

        <div className="h-full w-11/12">

          <div className="hero-section flex flex-col justify-center items-center">

            <div className="flex flex-col">
              <h1 className="inter-custom text-2xl text-tertiary text-left custom-shadow">
                Welcome to Men's Mason Club Volleyball
              </h1>
              <h2 className="inter-custom text-8xl text-white text-left custom-shadow">
                George Mason's
              </h2>
              <h3 className="inter-custom text-8xl text-white text-left custom-shadow">
                Volleyball Club
              </h3>
              <h4 className="inter-custom text-8xl text-white text-left custom-shadow"></h4>
            </div>
          </div>

          <div className="about-section bg-gradient-to-r from-purple-500 to-pink-500 "></div>

        </div>

        <div className="bg-white h-full"></div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
