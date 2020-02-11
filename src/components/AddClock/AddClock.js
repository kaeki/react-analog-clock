import React, { useState } from 'react';
import { timezones } from '../../utils';

const AddClock = ({ onAddClock, describedBy }) => {
  const [ newClock, setNewClock ] = useState();

  const emitNewClock = (e) => {
    e.preventDefault();
    onAddClock(newClock);
    setNewClock('');
  }

  return (
    <form onSubmit={emitNewClock} aria-describedby={describedBy}>
      <select value={newClock} onChange={e => setNewClock(e.target.value)} required>
        <option value="">Select a city</option>
        { 
          timezones.map((timezone, index) => (
            <option key={`${timezone}_${index}`} value={timezone}>{timezone}</option>
          ))
        }
      </select>
      <button>Add Clock</button>
    </form>
  )
};

export default AddClock;