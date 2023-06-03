// import ClockTab from "./components/ClockTab";
// import { useState } from "react";
// import moment from "moment";
import React, { useState, useEffect } from 'react';

function App() {

  const [clock, setClock] = useState(new Date());
  const [is12HourFormat, setItis24HoursFormat] = useState(true);
  const [showSeconds, getShowSeconds] = useState(true);

  useEffect(() =>{
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setClock(new Date());
  };

  const formatTime = () => {
      let hours = clock.getHours();
      let minutes = clock.getMinutes();
      let seconds = clock.getSeconds();
      let ampm = " ";
      
      if (is12HourFormat){
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
      }

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    if(!showSeconds){
      return `${hours}:${minutes} ${ampm}`
    }

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const padZero = (num) =>{
    return num.toString().padStart(2, '0');
  };
  const handleFormatChange = (event) =>{
    setItis24HoursFormat(event.target.checked);
  };
  
  const handleSecondToggle = (event) => {
    getShowSeconds(event.target.checked);
  };
  return (
    <div>
      <h1>{formatTime()}</h1>
      <input type='checkbox' checked={is12HourFormat} value={clock} onChange={handleFormatChange}/>
      <span></span>
      <input type='checkbox' checked={showSeconds} onChange={handleSecondToggle}/>

    </div>
  );
}




export default App;
