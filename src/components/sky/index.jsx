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
export default class sky extends React.Component {
  constructor(props) {
    super(props);
    this.fallDownHandle = this.fallDownHandle.bind(this);
    this.go = this.go.bind(this);
    this.state = {
      clouds: [],
      data: {},
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      const arr = this.state.clouds.slice();
      const index = arr.findIndex(c => c.content === e.key);
      if (index >= 0) {
        const cloud = arr.splice(index, 1)[0];
        const d = this.state.data;
        const ind = d[cloud.content].findIndex(v => v === Infinity);
        d[cloud.content][ind] = new Date() - cloud.time;
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
      const nData = this.state.data;
      if (nData[c] === undefined) {
        nData[c] = [Infinity];
      } else {
        nData[c].push(Infinity);
      }
      this.setState({
        clouds: arr,
        data: nData,
      });
    } else {
      window.clearInterval(this.timer);
    }
  }
  fallDownHandle(index) {
    const arr = this.state.clouds.slice();
    arr.splice(index, 1);
    this.setState({
      clouds: arr,
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
