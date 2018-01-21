import React from 'react';
import {
  CSetting as Setting,
  // CLife as Life,
  CContainer as Container,
  CPop as Pop,
  CStatics as Statics,
} from '../containers';

export default function Router({
  setting,
  training,
  statics,
}) {
  return (
    <div>
      {setting ? <Setting /> : null}
      {training ? <Container /> : null}
      {statics ? <Statics /> : null}
      <Pop />
    </div>
  );
}
