import React from 'react';
import uuid from 'uuid';
import Cloud from '../cloud';
// import nextChar from '../../dictionary';

// export default class sky extends React.Component {
//   constructor(props) {
//     super(props);
//     this.fallDownHandle = this.fallDownHandle.bind(this);
//     this.go = this.go.bind(this);
//     this.timer = this.timer.bind(this);
//     this.state = {
//       clouds: [],
//       data: [],
//       time: this.props.time,
//     };
//   }
//   componentDidMount() {
//     document.addEventListener('keydown', (e) => {
//       const arr = this.state.clouds.slice();
//       const index = arr.findIndex(c => c.content === e.key);
//       if (index >= 0) {
//         const cloud = arr.splice(index, 1)[0];
//         const d = this.state.data;
//         cloud.clearedTime = new Date();
//         d.push(cloud);
//         this.setState({
//           clouds: arr,
//           data: d,
//         });
//       }
//     });
//   }
//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       time: nextProps.time,
//     });
//     if (nextProps.start) {
//       this.timer = setInterval(() => {
//         this.setState(preState => ({
//           time: preState.time - 100,
//         }));
//         if (this.state.time <= 0) {
//           clearInterval(this.timer);
//           clearInterval(this.cloudInterval);
//           this.props.actions.over();
//         }
//       }, 100);
//       this.cloudInterval = setInterval(this.go, 1000 / nextProps.speed);
//     }
//   }
//   timer() {
//     this.timer = setInterval(() => {
//       this.setState(preState => ({
//         time: preState.time - 100,
//       }));
//     }, 100);
//   }
//   go() {
//     const c = nextChar();
//     const arr = this.state.clouds.concat({
//       content: c,
//       time: new Date(),
//       left: Math.random() * 400,
//       key: uuid.v4(),
//     });
//     this.setState({
//       clouds: arr,
//     });
//   }
//   fallDownHandle(index) {
//     const arr = this.state.clouds.slice();
//     const cloud = arr.splice(index, 1)[0];
//     cloud.clearedTime = Infinity;
//     const nData = this.state.data;
//     nData.push(cloud);
//     this.setState({
//       clouds: arr,
//       data: nData,
//     });
//   }
//   render() {
//     const arr = this.state.clouds.map((c, index) => (
//       <Cloud
//         key={c.key}
//         fallDownHandle={this.fallDownHandle}
//         left={c.left}
//         fontSize={this.props.fontSize}
//         content={c.content}
//         index={index}
//       />
//     ));
//     return (
//       <div>
//         {this.state.time}
//         <div>
//           {arr}
//         </div>
//       </div>
//     );
//   }
// }

export default class sky extends React.Component {
  constructor(props) {
    super(props);
    this.fallDownHandle = this.fallDownHandle.bind(this);
    this.keyDownFunc = this.keyDownFunc.bind(this);
    this.go = this.go.bind(this);
    this.state = {
      clouds: [],
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownFunc);
    this.cloudInterval = setInterval(this.go, 1000 / this.props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.cloudInterval);
    document.removeEventListener('keydown', this.keyDownFunc);
  }
  keyDownFunc(e) {
    const arr = this.state.clouds.slice();
    const index = arr.findIndex(c => c.content === e.key);
    if (index >= 0) {
      const cloud = arr.splice(index, 1)[0];
      // const d = this.state.data;
      cloud.clearedTime = new Date();
      this.props.data.push(cloud);
      this.setState({
        clouds: arr,
        // data: d,
      });
    }
  }
  go() {
    const c = this.props.dictionary.next();
    const arr = this.state.clouds.concat({
      content: c,
      time: new Date(),
      left: Math.random() * 400,
      key: uuid.v4(),
    });
    this.setState({
      clouds: arr,
    });
  }
  fallDownHandle(index) {
    const arr = this.state.clouds.slice();
    const cloud = arr.splice(index, 1)[0];
    cloud.clearedTime = Infinity;
    // const nData = this.state.data;
    this.props.data.push(cloud);
    this.setState({
      clouds: arr,
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
        {arr}
      </div>
    );
  }
}
