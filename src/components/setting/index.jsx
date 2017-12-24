import React from 'react';
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
      hp: this.hpInput.value,
      time: Number(this.timeInput.value) * 60 * 1000,
    });
  }
  render() {
    return (
      <div>
        <input defaultValue="14" ref={(input) => { this.fontSizeInput = input; }} type="text" />
        <input defaultValue="1" ref={(input) => { this.speedInput = input; }} type="text" />
        <input defaultValue="100" ref={(input) => { this.hpInput = input; }} type="text" />
        <input defaultValue="5" ref={(input) => { this.timeInput = input; }} type="text" />
        <button onClick={this.handleClick}>开始</button>
      </div>
    );
  }
}
