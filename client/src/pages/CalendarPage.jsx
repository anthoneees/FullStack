import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/CustomCalendar";

function CalendarPage() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get("https://fullstack-jwrb.onrender.com/api/google/calendar")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setEventData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setEventData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setEventData([]);
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* Main content wrapper with responsive spacing */}
      <main className="px-4 py-10 md:px-20 md:py-16 min-h-screen bg-gray-50">
        <h1 className="text-2xl inter-custom text-center text-secondary mb-8">
          Calendar
        </h1>

        {/* Responsive scrollable calendar container */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {eventData && <Calendar events={eventData} />}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default CalendarPage;
