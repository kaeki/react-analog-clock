import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import AnalogClock from './components/AnalogClock/AnalogClock';

const App = () => {
  return (
    <div className="wrapper">
      <h1>Cool analog clock</h1>
      <AnalogClock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);