import React, { useState } from 'react';

import AddClock from './AddClock/AddClock';
import ClockList from './ClockList/ClockList';

const initialClock = {
  id: Date.now(),
  timezone: null,
  city: 'Local'
};

const App = () => {
  const [ clocks, setClocks ] = useState([initialClock]);

  const addClock = (timezone) => {
    const clockToAdd = {
      id: Date.now(),
      timezone: timezone
    };

    setClocks([...clocks, clockToAdd]);
  };

  const deleteClock = (id) => {
    const filtered = clocks.filter(clock => clock.id !== id);

    setClocks(filtered);
  };

  return (
    <div className="wrapper">
      <div>
        <h1>Clocks clocks clocks! Clocks for everyone!</h1>
        <AddClock onAddClock={addClock} />
      </div>
      <ClockList items={clocks} onDelete={deleteClock} />
    </div>
  )
}

export default App;