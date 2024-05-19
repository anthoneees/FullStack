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
          <h1 className="pt-20 text-white inter-custom text-2xl mb-12">
            Team Events
          </h1>
          <div className="bg-white w-4/6 bg-glow outline outline-1 rounded">
            <div className="flex justify-between items-center p-3">
              <div className="flex pl-4 items-center">
                <p className="inter-custom text-xl">Open Gym</p>
                <p className="inter-small pl-2 text-md">
                  August 29th | 9:30pm-11:30pm
                </p>
              </div>
              <div className="bg-secondary mr-8 rounded">
                <a href="/opengym">
                  <button className=" text-md text-white px-10 py-1">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white w-4/6 mt-5 bg-glow outline outline-1 rounded">
            <div className="flex justify-between items-center p-3">
              <div className="flex pl-4 items-center">
                <p className="inter-custom text-xl">Team Tryouts</p>
                <p className="inter-small pl-2 text-md">
                  September 3rd & 5th | 9:30pm-11:30pm
                </p>
              </div>
              <div className="bg-secondary mr-8 rounded">
                <a href="/tryouts">
                  <button className=" text-md text-white px-10 py-1">
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
