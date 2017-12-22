import React from 'react';
import './main.scss';

// export default function fallingObj({ content, left, fontSize, speed }) {
//   const styleObj = {
//     left,
//     fontSize: fontSize + 'px',
//   };
//   return (
//     <div style={styleObj} className="fallingObj" >
//       {content}
//     </div>
//   );
// }
export default class fallingObj extends React.Component {
  componentDidMount() {
    this.div.addEventListener('animationend', () => {
      this.props.fallDownHandle(this.props.index);
    });
  }
  render() {
    const { left, fontSize, content } = this.props;
    const styleObj = {
      left,
      fontSize: fontSize + 'px',
    };
    return (
      <div ref={(div) => { this.div = div; }} style={styleObj} className="fallingObj" >
        {content}
      </div>
    );
  }
}
