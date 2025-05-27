import React from "react";

const CustomCalendar = ({ events }) => {
  const currentMonth = new Date();
  const currentMonthTitle =
    currentMonth.toLocaleString("default", { month: "long" }) +
    " " +
    currentMonth.getFullYear();

  const startDayOfWeek = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const daysArray = Array.from(
    { length: daysInMonth + startDayOfWeek },
    (_, index) =>
      index < startDayOfWeek
        ? null
        : new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index - startDayOfWeek + 1)
  );

  const sortByTime = (a, b) =>
    new Date(a.start).getTime() - new Date(b.start).getTime();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">{currentMonthTitle}</h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[700px] grid grid-cols-7 gap-2">
          {/* Weekday headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-sm md:text-base"
            >
              {day}
            </div>
          ))}

          {/* Calendar cells */}
          {daysArray.map((date, index) => {
            if (!date) return <div key={index}></div>;

            const eventsOnDate = events
              .filter(
                (event) =>
                  new Date(event.start).getDate() === date.getDate()
              )
              .sort(sortByTime);

            return (
              <div
                key={date.toDateString()}
                className="border border-gray-300 rounded p-2 md:p-3 min-h-[100px] md:min-h-[160px] text-sm md:text-base bg-white"
              >
                <div className="font-semibold mb-1">{date.getDate()}</div>
                {eventsOnDate.map((event, idx) => (
                  <div
                    key={idx}
                    className="mt-1 truncate text-xs md:text-sm"
                    title={event.title}
                  >
                    <div className="font-medium">{event.title}</div>
                    <div className="text-gray-600">
                      {new Date(event.start).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })}{" "}
                      -{" "}
                      {new Date(event.end).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
