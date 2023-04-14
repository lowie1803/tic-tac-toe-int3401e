import React, { useState, useEffect } from 'react';

function CountdownTimer({ time, isRunning }) {
  const [remainingTime, setRemainingTime] = useState(time);
  // console.log(`Some countdown is running: ${isRunning}`);

  useEffect(() => {
    setRemainingTime(time);
    const timerId = setInterval(() => {
      setRemainingTime(prevTime => (isRunning ? prevTime - 1 : prevTime));
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <div className="time-left">
      {remainingTime > 0 ? `Time left: ${remainingTime}` : 'Time is up!'}
    </div>
  );
}

export default CountdownTimer;
