import React from 'react';
import uuid from 'uuid';
import Cloud from '../cloud';
import nextChar from '../../dictionary';

// export default function ({speed, fontSize, start}) {
//   const arr = [];
//   if (!start) {
//     return null;
//   }
//   for (let i = 0; i < 10; i++) {
//     arr.push(<Cloud left={fontSize * 2 * i} fontSize={fontSize} content="A" />);
//   }
//   return (
//     <div>
//       {arr}
//     </div>
//   );
// }
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

export default class sky extends React.Component {
  constructor(props) {
    super(props);
    this.fallDownHandle = this.fallDownHandle.bind(this);
    this.go = this.go.bind(this);
    this.state = {
      clouds: [],
      data: [],
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      const arr = this.state.clouds.slice();
      const index = arr.findIndex(c => c.content === e.key);
      if (index >= 0) {
        const cloud = arr.splice(index, 1)[0];
        const d = this.state.data;
        cloud.clearedTime = new Date();
        d.push(cloud);
        this.setState({
          clouds: arr,
          data: d,
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.start && !this.timer) {
      this.startTime = new Date();
      this.timer = setInterval(this.go, 1000);
    }
  }
  go() {
    if (new Date() - this.startTime <= this.props.time) {
      const c = nextChar();
      const arr = this.state.clouds.concat({
        content: c,
        time: new Date(),
        left: Math.random() * 400,
        key: uuid.v4(),
      });
      this.setState({
        clouds: arr,
      });
    } else {
      window.clearInterval(this.timer);
      this.timer = null;
      this.props.actions.submitData(dataProcess(this.state.data));
    }
  }
  fallDownHandle(index) {
    const arr = this.state.clouds.slice();
    const cloud = arr.splice(index, 1)[0];
    cloud.clearedTime = Infinity;
    const nData = this.state.data;
    nData.push(cloud);
    this.setState({
      clouds: arr,
      data: nData,
    });
    this.props.actions.missOne();
  }
  render() {
    const arr = this.state.clouds.map((c, index) => (
      <Cloud
        key={c.key}
        fallDownHandle={this.fallDownHandle}
        left={c.left}
        fontSize={this.props.fontSize}
        content={c.content}
        index={index}
      />
    ));
    return (
      <div>
        {arr}
      </div>
    );
  }
}

