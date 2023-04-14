import React from 'react';
import { Line } from 'react-konva';

function Cross({x, y, radius}) {
  let adjustWidth = radius / 5;
  return (
    <>
        <Line
          x={x + adjustWidth}
          y={y + adjustWidth}
          points={[0, 0, (radius - adjustWidth) * 2, (radius - adjustWidth) * 2 ]}
          stroke="blue"
          strokeWidth={adjustWidth}
        />
        <Line
          x={x + adjustWidth}
          y={y + adjustWidth}
          points={[0, (radius - adjustWidth) * 2, (radius - adjustWidth) * 2, 0]}
          stroke="blue"
          strokeWidth={adjustWidth}
        />
    </>
  );
}

export default Cross;
