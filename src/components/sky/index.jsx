import React from 'react';
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
      });
      this.setState({
        clouds: arr,
      });
    }, 100);
  }
  render() {
    if (!this.props.start) {
      return null;
    }
    const arr = this.state.clouds.map(c => (
      <Cloud left={c.left} fontSize={this.props.fontSize} content={c.content} />
    ));
    return (
      <div>
        {arr}
      </div>
    );
  }
}
