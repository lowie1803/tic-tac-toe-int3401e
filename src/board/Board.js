import React, { useEffect } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import Cell from './Cell';

function create2DArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = '';
    }
  }
  return arr;
}

function Board({ gameData }) {
  const width = 1080;

  console.log(gameData.board);

  return (
    <Stage width={width} height={width}>
      <Layer>
        {
          gameData.board && gameData.board.map((row, i) => (
            row.map((piece, j) => (
              <Cell
                x={j * width / gameData.size}
                y={i * width / gameData.size}
                width={width / gameData.size}
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
