import React from 'react';
import { Circle, Group } from 'react-konva';

function Naught({x, y, radius}) {
  let adjustWidth = radius / 5;
  return (
    <Group>
      <Circle
        x={x + radius}
        y={y + radius}
        radius={radius - adjustWidth}
        stroke="#FFEB3B"
        strokeWidth={adjustWidth}
      />
    </Group>
  );
}

export default Naught;
