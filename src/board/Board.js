import React from 'react';
import { Stage, Layer } from 'react-konva';
import Cell from './Cell';

function vhToPixels(vh) {
  const height = window.innerHeight;
  const pixels = (vh * height) / 100;
  return pixels;
}

function Board({ gameState }) {
  const width = vhToPixels(75);

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
