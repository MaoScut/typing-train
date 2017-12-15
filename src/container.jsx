import React from 'react';
import Key from './key';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: ['a', 'b', 'c', 'd', 'e'],
      currentIndex: 0,
      time: 0,
    };
    this.keyDownHandle = this.keyDownHandle.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandle);
    setInterval(() => this.setState(preState => ({
      time: preState.time + 1,
    })));
  }
  keyDownHandle(e) {
    const stateKey = this.state.keys[this.state.currentIndex];
    if (e.key === stateKey) {
      this.setState(preState => ({
        currentIndex: preState.currentIndex + 1,
        time: 0,
      }));
    }
  }
  render() {
    return (
      <div>
        <Key keyName={this.state.keys[this.state.currentIndex]} />
        {this.state.time}
      </div>
    );
  }
}
