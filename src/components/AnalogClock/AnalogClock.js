import React, { useState, useEffect } from 'react';
import './AnalogClock.scss';

const DEFAULT_BACKGROUND = 'react.svg';

const getRefDate = (timezone) => {
  if (!timezone) return new Date();
  return new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
}

const AnalogClock = (props) => {
  const background = props.background ? props.background : DEFAULT_BACKGROUND;

  const refDate = getRefDate(props.timezone);
  const [ hours, setHours ] = useState(refDate.getHours());
  const [ minutes, setMinutes ] = useState(refDate.getMinutes());
  const [ seconds, setSeconds ] = useState(refDate.getSeconds());
  const [ label, setLabel ] = useState(refDate.toLocaleTimeString('en-US'));

  const tick = () => {
    const newRefDate = getRefDate(props.timezone);
    setHours(newRefDate.getHours());
    setMinutes(newRefDate.getMinutes());
    setSeconds(newRefDate.getSeconds());
    setLabel(newRefDate.toLocaleTimeString('en-US'))
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
    <div id={props.id} aria-label={label} className="analog-clock" style={{ backgroundImage: `url(${background})` }}>
      <span className="analog-clock__hours" style={ getHandStyle(hours, true) }/>
      <span className="analog-clock__minutes" style={ getHandStyle(minutes) }/>
      <span className="analog-clock__seconds" style={ getHandStyle(seconds) }/>
    </div>
  )
}

export default AnalogClock;
