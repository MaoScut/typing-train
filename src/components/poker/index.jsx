import React from 'react';
import Card from '../card';

export default class Poker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      content: this.props.dictionary.next(),
    };
    this.keyDownFunc = this.keyDownFunc.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownFunc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownFunc);
  }
  keyDownFunc(e) {
    if (e.key === 'Shift') return;
    if (e.key === this.state.content) {
      this.props.data.push({
        ...this.state,
        clearedTime: new Date(),
      });
    } else {
      this.props.data.push({
        ...this.state,
        clearedTime: Infinity,
      });
    }
    this.setState({
      time: new Date(),
      content: this.props.dictionary.next(),
    });
  }
  render() {
    return (
      <Card content={this.state.content} />
    );
  }
}
