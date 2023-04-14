import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import Cross from '../pieces/Cross';
import Naught from '../pieces/Naught';

function Cell({ x, y, width, piece }) {
  return (
    <>
      <Rect
        x={x}
        y={y}
        width={width}
        height={width}
        fillLinearGradientStartPoint={{ x: width, y: 0 }}
        fillLinearGradientEndPoint={{ x: 0, y: width }}
        fillLinearGradientColorStops={[0, "#212121", 1, "#D50000"]}
      />
      {
        (piece === 'x' || piece === 'X') && (<Cross x={x} y={y} radius={width / 2} />)
      }
      {
        (piece === 'o' || piece === 'O') && (<Naught x={x} y={y} radius={width / 2} />)
      }
    </>
  );
}

export default Cell;
