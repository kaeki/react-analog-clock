import React from 'react';

import './ClockList.scss';
import ClockListItem from './ClockListItem';

const ClockList = ({items, onDelete}) => {

  const renderList = items.map(clock => (
    <ClockListItem key={clock.id} className="clock-list-item" clock={clock} onDelete={onDelete} />
  ));

  return (
    <ul className="clock-list">
      {renderList}
    </ul>
  )
};

export default ClockList;
