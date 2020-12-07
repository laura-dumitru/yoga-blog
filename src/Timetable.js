import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Timetable() {
  return (
    <div className="title">
      <h2>Class Timetable</h2>
      <Calendar />
      <div className="schedule"></div>
    </div>
  );
}
