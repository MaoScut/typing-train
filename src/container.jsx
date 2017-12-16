import React from 'react';
import Key from './key';
import nextKey from './dictionary';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // keys: ['a', 'b', 'c', 'd', 'e'],
      // currentIndex: 0,
      key: nextKey(),
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
    const stateKey = this.state.key;
    if (e.key === stateKey) {
      this.setState({
        key: nextKey(),
        time: 0,
      });
    }
  }
  render() {
    return (
      <div>
        <Key keyName={this.state.key} />
        {this.state.time}
      </div>
    );
  }
}
