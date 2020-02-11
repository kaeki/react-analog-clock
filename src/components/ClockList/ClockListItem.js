import React from 'react';

import './ClockListItem.scss';
import AnalogClock from '../AnalogClock/AnalogClock';

const ClockListItem = ({clock, onDelete}) => {
  const getClockLabel = () => {
    if (clock.timezone) {
      const splitted = clock.timezone.split('/').reverse();

      return (
        splitted.map(item => (
          <span>{item.replace('_', ' ')}</span>
        ))
      );
    }

    return <span>Local time</span>;
  }

  return (
    <li className="clock-list-item">
      <button className="delete" onClick={e => onDelete(clock.id)}>
        <span aria-hidden="true">❌</span>
        <span className="visually-hidden">Delete</span>
      </button>
      <AnalogClock {...clock}/>
      <label htmlFor={clock.id}>
        {getClockLabel()}
      </label>
    </li>
  )
};

export default ClockListItem;
