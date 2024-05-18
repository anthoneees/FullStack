import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/CustomCalendar";

function CalendarPage() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/google/calendar")
      .then((response) => {
        // Check if the response data is already an array
        if (Array.isArray(response.data)) {
          setEventData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setEventData([]); // Fallback to empty array
        }
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setEventData([]); // Fallback to empty array
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="m-20">{eventData && <Calendar events={eventData} />}</div>
      <Footer />
    </>
  );
}

export default CalendarPage;
