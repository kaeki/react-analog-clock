import React, { useState } from 'react';

import ClockListItem from './ClockListItem/ClockListItem';

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

  const clocksList = clocks.map(clock => (
    <ClockListItem key={clock.id} clock={clock} onDelete={deleteClock} />
  ));

  return (
    <div className="wrapper">
      <div>
        <h1>Clocks clocks clocks! Clocks for everyone!</h1>
        <button onClick={e => addClock()}>Add</button>
      </div>
      <div>
        {clocksList}
      </div>
      
    </div>
  )
}

export default App;