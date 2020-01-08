import React, { useState, useEffect } from 'react';
import './Clock.scss';

const Clock = () => {
  const refDate = new Date();
  const [ hours, setHours ] = useState(refDate.getHours());
  const [ minutes, setMinutes ] = useState(refDate.getMinutes());
  const [ seconds, setSeconds ] = useState(refDate.getSeconds());

  const tick = () => {
    const newRefDate = new Date();
    setHours(newRefDate.getHours());
    setMinutes(newRefDate.getMinutes());
    setSeconds(newRefDate.getSeconds());
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  });

  const getHandStyle = (value, hours) => {
    const max = hours ? 12 : 60;
    const timeValue = hours && value > 12 ? value - 12 : value;
    const rotation = Math.round(timeValue / max * 360 - 90);

    const style = {
      transform: `translateX(50%) rotate(${rotation}deg)`
    };

    if (timeValue === 0) style.transition = 'none'; // Dumb fix for 59 -> 0 rotation transition

    return style;
  }

  return (
    <div className="clock">
      <span className="clock__hours" style={ getHandStyle(hours, true) }/>
      <span className="clock__minutes" style={ getHandStyle(minutes) }/>
      <span className="clock__seconds" style={ getHandStyle(seconds) }/>
    </div>
  )
}

export default Clock;
