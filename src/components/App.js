import React, { useState } from 'react';

import ClockList from './ClockList/ClockList';

const initialClock = {
  id: Date.now(),
  timezone: null,
  city: 'Local'
};

const App = () => {
  const [ clocks, setClocks ] = useState([initialClock]);

  const addClock = () => {
    const newClock = {
      id: Date.now(),
      timezone: null,
      city: 'New clock'
    }

    setClocks([...clocks, newClock]);
  };

  const deleteClock = (id) => {
    const filtered = clocks.filter(clock => clock.id !== id);

    setClocks(filtered);
  };

  return (
    <div className="wrapper">
      <div>
        <h1>Clocks clocks clocks! Clocks for everyone!</h1>
        <button onClick={e => addClock()}>Add</button>
      </div>
      <ClockList items={clocks} onDelete={deleteClock} />
    </div>
  )
}

export default App;