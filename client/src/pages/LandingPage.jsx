// LandingPage.js
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import "../styles/landingpage.css";
import Footer from "../components/Footer";

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
            <div className="flex flex-col custom-shadow inter-custom text-left tracking-tight">
              <h1 className=" text-2xl text-tertiary">
                Welcome to Mason Men's Club Volleyball
              </h1>
              <h2 className="text-8xl text-white">
                George Mason's
              </h2>
              <h3 className="text-8xl text-white">
                Volleyball Club
              </h3>
              <h4 className="text-2xl text-customGray pt-8">
              Empowering aspiring athletes through volleyball, fostering teamwork,
              </h4>
              <h5 className="text-2xl text-customGray ">
              sportsmanship, and personal growth. 
              </h5>
            </div>
          </div>

          <div className=" about-section bg-white outline "> hey </div>
          <div className=" about-section bg-secondary outline"> hey </div>
          <Footer />
        </div>

        <div className="bg-white h-full"></div>
      </div>
    </>
  );
}

export default LandingPage;
