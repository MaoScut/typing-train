import React from 'react';
// import FallingObj from '../fallingObj';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.actions.setFontSizeAndSpeed({
      fontSize: this.fontSizeInput.value,
      speed: this.speedInput.value,
    });
  }
  render() {
    return (
      <div>
        <input defaultValue="14" ref={(input) => { this.fontSizeInput = input; }} type="text" />
        <input defaultValue="1" ref={(input) => { this.speedInput = input; }} type="text" />
        <button onClick={this.handleClick}>开始</button>
      </div>
    );
  }
}
