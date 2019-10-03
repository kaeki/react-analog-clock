import React from 'react';
import './Clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.updateTime();
  }

  updateTime() {
    const date = new Date();
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
  }

  getHandAngle(value, hand) {
    const max = hand === 'hours' ? 12 : 60;
    const timeValue = hand === 'hours' && value > 12 ? value - 12 : value;
    const rotation = Math.round(timeValue / max * 360 - 90);
    
    return rotation;
  }

  getHandStyle(hand) {
    return {
      transform: `translateX(50%) rotate(${this.getHandAngle(this.state[hand], hand)}deg)`
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(this.updateTime());
    }, 1000)
  };
  
  render() {
    return (
      <div className="clock">
        <span className="clock__hours" style={this.getHandStyle('hours')}/>
        <span className="clock__minutes" style={this.getHandStyle('minutes')}/>
        <span className="clock__seconds" style={this.getHandStyle('seconds')}/>
      </div>
    )
  }
}

export default Clock;
