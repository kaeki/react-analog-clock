import React from 'react';
import { motion } from 'framer-motion';

import './ClockList.scss';
import ClockListItem from './ClockListItem';

const ClockList = ({items, onDelete}) => {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300
  };

  return (
    <ul className="clock-list">
      {items.map(clock => (
        <motion.li
          key={clock.id}
          layoutTransition={spring}>
          <ClockListItem
            className="clock-list-item"
            clock={clock}
            onDelete={onDelete} />
        </motion.li>
      ))}
    </ul>
  )
};

export default ClockList;
