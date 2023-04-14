import React from 'react';
import { Stage, Layer } from 'react-konva';
import Cell from './Cell';

function Board({ gameState }) {
  const width = 960;

  return (
    <Stage width={width} height={width}>
      <Layer>
        {
          gameState.board && gameState.board.map((row, i) => (
            row.map((piece, j) => (
              <Cell
                x={j * width / gameState.size}
                y={i * width / gameState.size}
                width={width / gameState.size}
                piece={piece}
              />
            ))
          ))
        }
      </Layer>
    </Stage>
  );
}

export default Board;
