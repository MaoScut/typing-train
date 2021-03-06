import React from 'react';
import Sky from '../sky';
import Poker from '../poker';
import './main.scss';

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
  componentDidMount() {
    this.timer = setInterval(() => {
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
  render() {
    return (
      <div className="top">
        <div>剩余时间： {this.state.time}</div>
        {/* <Poker
          fontSize={this.props.fontSize}
          speed={this.props.speed}
          data={this.state.data}
          dictionary={this.props.dictionary}
        /> */}
        <Sky
          fontSize={this.props.fontSize}
          speed={this.props.speed}
          data={this.state.data}
          dictionary={this.props.dictionary}
        />
      </div>
    );
  }
}
