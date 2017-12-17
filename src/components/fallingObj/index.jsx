import React from 'react';
import './main.scss';

export default function fallingObj({ content, left }) {
  const styleObj = {
    left,
  };
  return (
    <div style={styleObj} className="fallingObj" >
      {content}
    </div>
  );
}
