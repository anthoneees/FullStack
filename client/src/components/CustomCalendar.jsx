import React from "react";

const CustomCalendar = ({ events }) => {
  // Get the current month's title
  const currentMonth = new Date();
  const currentMonthTitle = currentMonth.toLocaleString('default', { month: 'long' }) + ' ' + currentMonth.getFullYear();

  // Get the day of the week the month starts on (0 for Sunday, 1 for Monday, etc.)
  const startDayOfWeek = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  // Generate an array of dates for the current month
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth + startDayOfWeek }, (_, index) =>
    index < startDayOfWeek ? null : new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index - startDayOfWeek + 1)
  );

  // Function to sort events by time
  const sortByTime = (a, b) => {
    return new Date(a.start).getTime() - new Date(b.start).getTime();
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">{currentMonthTitle}</h2>
      <div className="grid grid-cols-7 gap-2">
        {/* Weekday labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}

        {/* Grid boxes for dates */}
        {daysArray.map((date, index) => {
          if (!date) {
            return <div key={index}></div>; // Placeholder for empty grid cells before the month starts
          }
          const eventsOnDate = events.filter((event) =>
            new Date(event.start).getDate() === date.getDate()
          ).sort(sortByTime);

          return (
            <div key={date.toDateString()} className="border border-gray-300 p-2 h-40 w-56">
              <div className="font-semibold">{date.getDate()}</div>
              {/* Render events for this date */}
              {eventsOnDate.map((event) => (
                <div key={event.title} className="mt-1">
                  <div className="text-sm inter-small">{event.title}</div>
                  <div className="text-sm inter-small">{new Date(event.start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} - {new Date(event.end).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
