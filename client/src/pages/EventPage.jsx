import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TryoutForm from "../components/TryoutForm";

function EventPage() {
  return (
    <>
      <Navbar />
      <div className="mt-20"></div>
      <TryoutForm/>
      <Footer />
    </>
  );
}

export default EventPage;
