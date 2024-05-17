import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/EventPage";
import AboutPage from "./pages/AboutPage";
import CalendarPage from "./pages/CalendarPage";
import TryoutForm from "./pages/TryoutForm";
import OpenForm from "./pages/OpenForm";

function App() {
  return (
    <div className="h-screen m-0 p-0">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/events/tryouts" element={<TryoutForm />} />
        <Route path="/events/opengym" element={<OpenForm />} />
      </Routes>
    </div>
  );
}

export default App;
