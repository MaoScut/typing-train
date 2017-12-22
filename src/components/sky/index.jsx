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
    this.state = {
      clouds: [],
    };
  }
  componentDidMount() {
    setInterval(() => {
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
    }, 1000);
    document.addEventListener('keydown', (e) => {
      const arr = this.state.clouds.slice();
      const index = arr.findIndex(c => c.content === e.key);
      if (index >= 0) {
        arr.splice(index, 1);
        this.setState({
          clouds: arr,
        });
      }
    });
  }
  fallDownHandle(index) {
    const arr = this.state.clouds.slice();
    arr.splice(index, 1);
    this.setState({
      clouds: arr,
    });
  }
  render() {
    if (!this.props.start) {
      return null;
    }
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
