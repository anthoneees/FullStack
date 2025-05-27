import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/eventpage.css";

function EventPage() {
  return (
    <>
      <Navbar />

      {/* Background image container (if styled via CSS) */}
      <div className="bg-image w-full"></div>

      {/* Main content */}
      <div className="content-wrapper px-4 py-8">
        <div className="flex flex-col items-center">
          <h1 className="pt-20 text-white inter-custom text-2xl mb-12 text-center">
            Team Events
          </h1>

          {/* Open Gym Event Card */}
          <div className="bg-white w-full md:w-4/6 mb-5 bg-glow outline outline-1 rounded">
            <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:pl-4">
                <p className="inter-custom text-xl text-center md:text-left">Open Gym</p>
                <p className="inter-small text-md text-center md:text-left md:pl-2">
                  August 29th | 9:30pm–11:30pm
                </p>
              </div>
              <div className="bg-secondary rounded self-center md:self-auto">
                <a href="/opengym">
                  <button className="text-md text-white px-8 py-2 w-full md:w-auto">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Tryouts Event Card */}
          <div className="bg-white w-full md:w-4/6 bg-glow outline outline-1 rounded">
            <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:pl-4">
                <p className="inter-custom text-xl text-center md:text-left">Team Tryouts</p>
                <p className="inter-small text-md text-center md:text-left md:pl-2">
                  September 3rd & 5th | 9:30pm–11:30pm
                </p>
              </div>
              <div className="bg-secondary rounded self-center md:self-auto">
                <a href="/tryouts">
                  <button className="text-md text-white px-8 py-2 w-full md:w-auto">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventPage;
