import React from 'react';
import './main.scss';
// import FallingObj from '../fallingObj';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.actions.set({
      fontSize: this.fontSizeInput.value,
      speed: this.speedInput.value,
      // hp: this.hpInput.value,
      time: Number(this.timeInput.value) * 60 * 1000,
    });
  }
  render() {
    return (
      <div className="setting">
        字体大小:
        <input
          defaultValue={this.props.fontSize}
          ref={(input) => { this.fontSizeInput = input; }}
          type="text"
        />
        <br />
        速度：
        <input
          defaultValue={this.props.speed}
          ref={(input) => { this.speedInput = input; }}
          type="text"
        />
        <br />
        {/* <input defaultValue="100" ref={(input) => { this.hpInput = input; }} type="text" /> */}
        时间:
        <input
          defaultValue={this.props.time / 60000}
          ref={(input) => { this.timeInput = input; }}
          type="text"
        />
        <br />
        <button onClick={this.handleClick}>开始</button>
      </div>
    );
  }
}
