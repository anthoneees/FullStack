import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/CustomCalendar";

function CalendarPage() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios.get("/api/google/calendar").then((response) => {
      setEventData(response.data);
    });
  });

  return (
    <>
      <Navbar />
      <div className="mt-20"></div>
      <div>
        {eventData && <Calendar events={eventData} />}
      </div>
      <Footer />
    </>
  );
}

export default CalendarPage;
