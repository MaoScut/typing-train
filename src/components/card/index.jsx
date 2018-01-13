import React from 'react';

export default function Card({ content, fontSize }) {
  const styleObj = {
    fontSize: fontSize + 'px',
    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: fontSize + 'px',
    height: fontSize + 'px',
  };
  return (
    <div style={styleObj}><pre>{content}</pre></div>
  );
}
