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

      <div className="flex w-full justify-center">
        <div className="bg-white"></div>

        <div className=" w-11/12 custom-shadow">
          <div className="hero-section flex flex-col justify-center items-center">
            <div className="flex flex-col inter-custom text-left tracking-tight">
              <h1 className=" text-2xl text-tertiary">
                Welcome to Mason Men's Club Volleyball
              </h1>
              <h2 className="text-8xl text-white">George Mason's</h2>
              <h3 className="text-8xl text-white">Volleyball Club</h3>
              <h4 className="text-2xl text-customGray pt-8">
                Empowering aspiring athletes through volleyball, fostering
                teamwork,
              </h4>
              <h5 className="text-2xl text-customGray ">
                sportsmanship, and personal growth.
              </h5>
            </div>
          </div>

          <div>
            <div className=" inter-custom text-secondary py-8">
              <h1 className ="bg-white text-4xl ml-4">About Our Program</h1>
              <div className="h-0.5 mt-4 bg-secondary w-1/6 ml-4"></div>
              <p className="py-8 text-xl w-5/6 ml-4">
                We are committed to ensuring that every GMU athlete has a
                positive experience that fuels his or her love of volleyball and
                competition. We teach our athletes the game of volleyball
                including all aspects of skills training, tactical knowledge,
                match strategies as well as teaching them to be disciplined,
                train at full effort, be a positive and supportive teammate,
                push beyond their comfort level and compete with confidence and
                enthusiasm.
              </p>
              <p className="text-xl w-5/6 ml-4">
                The club will also provide a structure that will facilitate the
                operation of individual teams in terms of providing practice
                facilities, equipment, and communication. We believe all these 
                to be necessary in delivering a safe, competitive volleyball experience 
                for the athletes.
              </p>
              <a href="/events">
                <button className="bg-secondary text-lg rounded-2xl text-white mt-8 p-1 ml-4">
                  Ready to Play?
                </button>
              </a>
            </div>
          </div>
          <div className="  bg-white">
            <h1>Stay Connected</h1>
            <h2>@MASONCLUBVOLLEYBALL</h2>
            <div></div>
          </div>
          <Footer />
        </div>

        <div className="bg-white">
          
        </div>
      </div>
    </>
  );
}

export default LandingPage;
