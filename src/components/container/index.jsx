import React from 'react';
import Sky from '../sky';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 时间是已毫秒为单位的
      time: props.time,
      data: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.start) {
      this.setState({
        time: nextProps.time,
        fontSize: nextProps.fontSize,
        speed: nextProps.speed,
        data: [],
      });
      this.timer = setInterval(() => {
        console.log(this.state.data);
        this.setState((preState) => {
          if (preState.time <= 0) {
            clearInterval(this.timer);
            return ({
              time: 0,
            });
          }
          return ({
            time: preState.time - 100,
          });
        });
      }, 100);
    }
  }

  render() {
    return (
      <div>
        <div>剩余时间： {this.state.time}</div>
        {this.state.time > 0 && this.props.start ? <Sky
          fontSize={this.state.fontSize}
          speed={this.state.speed}
          data={this.state.data}
        /> : null}
      </div>
    );
  }
}
