import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";
import "../styles/landingpage.css";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="relative w-full flex justify-center">
        <div className="custom-shadow">
          {/* Hero Section */}
          <div className="hero-section flex flex-col justify-center items-center relative">
            <div className="background-image" />
            <div className="text-content inter-custom text-left tracking-tight drop-shadow-text">
              <h1 className="text-xl md:text-2xl lg:text-3xl text-tertiary">
                Welcome to Mason Men's Club Volleyball
              </h1>
              <h2 className="text-6xl md:text-7xl lg:text-8xl text-white">George Mason's</h2>
              <h3 className="text-6xl md:text-7xl lg:text-8xl text-white">Volleyball Club</h3>
              <h4 className="text-lg md:text-xl lg:text-2xl text-customGray pt-8">
                Empowering student athletes through volleyball, fostering
                teamwork,
              </h4>
              <h5 className="text-lg md:text-xl lg:text-2xl text-customGray">
                sportsmanship, and personal growth.
              </h5>
            </div>
          </div>

          {/* Join Section */}
          <div className="bg-white flex flex-col items-center p-12">
            <h1 className="text-4xl inter-custom text-secondary">Join Us</h1>
            <div className="flex flex-col md:flex-row mt-8 gap-6">
              <div className="tryout-image w-full md:w-1/2 h-64 md:h-auto" />

              <div className="p-8 flex flex-col items-center w-full md:w-1/2">
                <div className="pb-10 text-center flex flex-col items-center justify-center">
                  <h1 className="text-3xl inter-custom">Our Events</h1>
                  <p className="w-full md:w-3/4 inter-small py-4">
                    Whether you're aiming for our A team or our B team, we
                    welcome players of all skill levels. As a member of GMU
                    Men's Club Volleyball, you'll compete at both regional and
                    national levels!
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 pb-8">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h1 className="inter-custom text-xl underline">Open Gym</h1>
                    <p className="w-full md:w-5/6 pt-4 inter-small">
                      Kick off the semester with our Open Gym, held on the first
                      Thursday of each semester from 9:30–11:30pm at the Field
                      House.
                    </p>
                  </div>

                  <div className="text-center flex flex-col items-center justify-center">
                    <h1 className="inter-custom text-xl underline">Tryouts</h1>
                    <p className="w-full md:w-5/6 pt-4 inter-small">
                      Ready to take the next step? Tryouts are held on the
                      second Tuesday and Thursday of each semester, also from
                      9:30–11:30pm at the Field House.
                    </p>
                  </div>
                </div>

                <a href="/events">
                  <button className="bg-secondary text-white text-lg rounded-2xl mt-8 px-6 py-2">
                    Register for Upcoming Events
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white">
            <div className="py-20 px-4 text-black text-center flex flex-col items-center justify-center">
              <h1 className="text-4xl">About Our Program</h1>
              <p className="py-8 text-xl w-full md:w-5/6">
                We are a nonprofit volleyball club that fosters a competitive
                and enriching environment for our 30 passionate members. Our
                team competes during the fall and spring semesters with two
                mandatory practices each week. Join us to enhance your skills,
                compete at regional and national levels, and be part of a
                dedicated and supportive community.
              </p>
              <a href="/events">
                <button className="bg-green-900 text-white text-lg rounded-2xl mt-8 px-6 py-2">
                  Learn More ➞
                </button>
              </a>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
