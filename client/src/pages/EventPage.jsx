import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/eventpage.css";

function EventPage() {
  return (
    <>
      <Navbar />
      <div className="bg-image w-full"></div>
      <div className="content-wrapper">
        <div className="flex flex-col items-center">
          <h1 className="pt-20 text-white">Team Events</h1>
          <div className="bg-white flex justify-between items-center mb-3 w-4/6">
            <p>Open Gym August 29th</p>
            <a href="/opengym">
              <button className="bg-secondary text-md rounded-2xl text-white mt-8 p-2 ml-4">
                Register
              </button>
            </a>
          </div>
          <div className="bg-white flex justify-between items-center w-4/6">
            <p>Team Tryouts September 3rd & 5th</p>
            <a href="/tryouts">
              <button className="bg-secondary text-md rounded-2xl text-white mt-8 p-2 mr-4">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventPage;
