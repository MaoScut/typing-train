import React from 'react';
import Sky from '../sky';

function dataProcess(rawData) {
  const result = {};
  for (let i = 0; i < rawData.length; i += 1) {
    const key = rawData[i].content;
    if (!result[key]) {
      result[key] = {
        detail: [],
        missTime: 0,
      };
    }
    if (rawData[i].clearedTime === Infinity) {
      result[key].missTime += 1;
    } else {
      result[key].detail.push(rawData[i].clearedTime - rawData[i].time);
    }
  }
  Object.keys(result).forEach((k) => {
    if (result[k].detail.length === 0) {
      result[k].averageTime = 0;
    } else {
      const sum = result[k].detail.reduce((pre, cur) => pre + cur);
      result[k].averageTime = sum / result[k].detail.length;
    }
    delete result[k].detail;
  });
  return result;
}

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
            this.props.actions.over();
            this.props.actions.submitData(dataProcess(this.state.data));
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
