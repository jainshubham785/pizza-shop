import React, { useState, useEffect } from "react";

const Timer = ({ time, setTime }) => {
  useEffect(() => {
    let interval;

    const startTimer = () => {
      interval = setInterval(() => {
        setTime((prevTime) => {
          //incrementing the sec
          const newSeconds = prevTime.seconds + 1;
          //if sec = 60, incrementing the min
          if (newSeconds === 60) {
            return { minutes: prevTime.minutes + 1, seconds: 0 };
          }
          return { ...prevTime, seconds: newSeconds };
        });
      }, 500);
    };

    startTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span>
        {time.minutes} min {time.seconds} sec
      </span>
    </div>
  );
};

export default Timer;
