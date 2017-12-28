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
      time: this.props.time,
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
    if (nextProps.start) {
      this.setState({
        time: nextProps.time,
      })
      this.timer = setInterval(() => {
        if (this.state.time > 0) {
          this.go();
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.props.actions.over();
          // this.props.actions.submitData(dataProcess(this.state.data));
        }
      }, 1000);
    }
  }
  go() {
    const c = nextChar();
    const arr = this.state.clouds.concat({
      content: c,
      time: new Date(),
      left: Math.random() * 400,
      key: uuid.v4(),
    });
    this.setState(preState => ({
      clouds: arr,
      time: preState.time - 1000,
    }));
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
        {this.state.time}
        <div>
          {arr}
        </div>
      </div>
    );
  }
}

