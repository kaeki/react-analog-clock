import React, { useState } from 'react';

import './App.scss';
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
      <header className="background--blue">
        <h1>World Clocks</h1>
        <p id="page-description">Pick a city / timezone from list below and watch how the time flies around world!</p>
        <AddClock onAddClock={addClock} describedBy="page-description" />
      </header>
      <ClockList items={clocks} onDelete={deleteClock} />
    </div>
  )
}

export default App;