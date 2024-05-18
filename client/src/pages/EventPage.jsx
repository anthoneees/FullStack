import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EventPage() {
  return (
    <>
      <Navbar />
      <div className="mt-20"></div>
      <a href = "/opengym">
      <button className="bg-secondary text-md rounded-2xl text-white mt-8 p-2 ml-4">
        Open Gym
      </button>
      </a>
      <a href="/tryouts">
      <button className="bg-secondary text-md rounded-2xl text-white mt-8 p-2 ml-4">
        Tryouts
      </button>
      </a>

      <Footer />
    </>
  );
}

export default EventPage;
