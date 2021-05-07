import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Timetable.css";

export default function Timetable() {
  const [value, setValue] = useState(new Date());
  const [yogaClass, setYogaClass] = useState({});

  const yogaClasses = [
    {},
    {
      name: "Yoga for legs and lower back",
      with: "Antonia",
      time: "Time: 10–10:45",
      level: "All levels",
    },
    {
      name: "Yoga for neck and shoulders",
      with: "Adrienne",
      time: "Time: 11:00–11:45",
      level: "All levels",
    },
    {
      name: "Total Body Stretch",
      with: "Laura",
      time: "Time: 18:00–18:45",
      level: "All levels",
    },
    {
      name: "Hips and Core",
      with: "Johanna",
      time: "Time: 17:45–18:30",
      level: "Intermediate",
    },
    {
      name: "Yoga Breath",
      with: "Daniel",
      time: "Time: 9:00–9:45",
      level: "Beginners",
    },
    {
      name: "Yoga for anxiety",
      with: "Maqs",
      time: "Time: 17:00–17:45",
      level: "All levels",
    },
  ];

  function showYogaClass(date) {
    setValue(date);
    const day = date.getDay();
    setYogaClass(yogaClasses[day]);
  }

  return (
    <div className="title">
      <h2>Class Timetable</h2>
      <div className="timetable">
        <Calendar onClickDay={showYogaClass} value={value} />
        <div className="yogaClass">
          <h4>{yogaClass.name}</h4>
          <p>{yogaClass.with}</p>
          <p>{yogaClass.time}</p>
          <p>{yogaClass.level}</p>
          <p>{yogaClass.description}</p>
        </div>
      </div>
    </div>
  ); //value={value}
}
