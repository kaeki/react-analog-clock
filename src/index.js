import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Clock from './components/Clock';

const App = () => {
  return (
    <div className="wrapper">
      <h1>Cool analog clock</h1>
      <Clock/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);