import React from 'react';
import FallingObj from '../fallingObj';

export default function ({speed, fontSize}) {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<FallingObj left={fontSize * 2 * i} fontSize={fontSize} content="A" />);
  }
  return (
    <div>
      {arr}
    </div>
  );
}
