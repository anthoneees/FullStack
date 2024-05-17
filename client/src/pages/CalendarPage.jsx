import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CalendarPage() {
  const [eventsByDate, setEventsByDate] = useState({});

  useEffect(() => {
    axios
      .get("/api/google/calendar")
      .then((response) => {
        // Organize events by date
        const events = response.data;
        const eventsByDateObj = {};
        events.forEach((event) => {
          const date = new Date(event.start.dateTime).toDateString();
          if (!eventsByDateObj[date]) {
            eventsByDateObj[date] = [];
          }
          eventsByDateObj[date].push(event);
        });
        setEventsByDate(eventsByDateObj);
      })
      .catch((error) =>
        console.error("Error fetching calendar events:", error)
      );
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Custom Calendar
          </h1>
          <div className="grid grid-cols-7 gap-4 border border-gray-300 rounded">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="col-span-1 p-4 border-r border-b border-gray-300"
              >
                <h2 className="text-lg font-semibold">{day}</h2>
              </div>
            ))}
            {Object.keys(eventsByDate).map((date) => (
              <div
                key={date}
                className="col-span-1 p-4 border-r border-b border-gray-300"
              >
                <div className="bg-white rounded shadow">
                  <h2 className="text-lg font-semibold mb-4">{date}</h2>
                  <ul>
                    {eventsByDate[date].map((event) => (
                      <li key={event.id} className="mb-2">
                        <p className="text-sm font-medium">{event.summary}</p>
                        <p className="text-xs text-gray-500">
                          {event.start.dateTime}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CalendarPage;
