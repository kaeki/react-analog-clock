import React from 'react';

import './ClockList.scss';
import ClockListItem from './ClockListItem';

const ClockList = ({items, onDelete}) => {

  const renderedList = items.map(clock => (
    <ClockListItem key={clock.id} className="clock-list-item" clock={clock} onDelete={onDelete} />
  ));

  return (
    <div className="clock-list">
      {renderedList}
    </div>
  )
};

export default ClockList;
