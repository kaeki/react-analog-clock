import React from 'react';

import AnalogClock from '../AnalogClock/AnalogClock';

const ClockListItem = ({clock, onDelete}) => {
  return (
    <div>
      <button onClick={e => onDelete(clock.id)}>Delete</button>
      <AnalogClock {...clock}/>
      <label htmlFor={clock.id}>{clock.city}</label>
    </div>
  )
};

export default ClockListItem;
