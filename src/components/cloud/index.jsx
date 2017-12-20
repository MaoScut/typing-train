import React from 'react';
import './main.scss';

export default function fallingObj({ content, left, fontSize, speed }) {
  const styleObj = {
    left,
    fontSize,
  };
  return (
    <div style={styleObj} className="fallingObj" >
      {content}
    </div>
  );
}
