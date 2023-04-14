import React from 'react';
import { Circle } from 'react-konva';

function Naught({x, y, radius}) {
  let adjustWidth = radius / 5;
  return (
    <Circle
      x={x + radius}
      y={y + radius}
      radius={radius - adjustWidth}
      stroke="red"
      strokeWidth={adjustWidth}
    />
  );
}

export default Naught;
