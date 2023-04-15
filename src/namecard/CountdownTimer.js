import React, { useState, useEffect } from 'react';

function formatTime(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = (date.getUTCMinutes() + hh).toString().padStart(2, "0");
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

function CountdownTimer({ time, isRunning }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    setRemainingTime(time);
    const timerId = setInterval(() => {
      setRemainingTime(prevTime => (isRunning ? prevTime - 1 : prevTime));
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, isRunning]);

  return (
    <div className="time-left">
      {remainingTime > 0 ? `Time left: ${formatTime(remainingTime)}` : 'Time is up!'}
    </div>
  );
}

export default CountdownTimer;
