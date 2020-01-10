import React from 'react';

import './ClockListItem.scss';
import AnalogClock from '../AnalogClock/AnalogClock';

const ClockListItem = ({clock, onDelete}) => {
  const offset = clock.timezoneOffset 
    ? clock.timezoneOffset
    : new Date().getTimezoneOffset() / 60;

  return (
    <div className="clock-list-item">
      <button className="delete" onClick={e => onDelete(clock.id)}>
        <span aria-hidden="true">❌</span>
        <span className="visually-hidden">Delete</span>
      </button>
      <AnalogClock {...clock}/>
      <label htmlFor={clock.id}>
        {clock.city} {offset > 0 ? '+' + offset : offset}
      </label>
    </div>
  )
};

export default ClockListItem;
