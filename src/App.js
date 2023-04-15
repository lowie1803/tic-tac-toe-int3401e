import './App.css';
import { useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import Cross from './pieces/Cross';
import Naught from './pieces/Naught';
import Board from './board/Board';
import NameCard from './namecard/NameCard';
import config from './config.json';

function App() {
  const [gameStates, setGameStates] = useState({
    match_id: 123,
    status: null,
    size: 0,
    board: [],
    time1: 100,
    time2: 100,
    team1_id: "team1",
    team2_id: "team2",	
    turn: 1,
    score1: 0,
    score2: 1
  });
  const [turn1, setTurn1] = useState(false);
  const [turn2, setTurn2] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${config.server_url || "http://localhost"}:${config.fakedb_port || 3001}/game_states`);
      const data = await response.json();
      setGameStates(data);
      setTurn1(data.turn === data.team1_id);
      setTurn2(data.turn === data.team2_id);
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, config.fetch_interval || 2000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Stage width={100} height={100}>
          <Layer>
            <Cross x={0} y={0} radius={50} />
          </Layer>
        </Stage>
        <NameCard
          name={gameStates.team1_id}
          score={gameStates.score1}
          avatar="https://avatarfiles.alphacoders.com/156/156748.jpg"
          timeLeft={gameStates.time1}
          isRunning={turn1}
        />
        <div>
          <p>INT3401E 22 Tic-tac-toe Battle!</p>
          {gameStates.status === gameStates.team1_id &&
            <p className='team1-text'>{gameStates.team1_id} wins!</p>}
          {gameStates.status === gameStates.team2_id &&
            <p className='team2-text'>{gameStates.team2_id} wins!</p>}
        </div>
        <NameCard
          name={gameStates.team2_id}
          score={gameStates.score2}
          avatar="https://i.redd.it/tnpjnvyab2z31.png"
          timeLeft={gameStates.time2}
          isRunning={turn2}
        />
        <Stage width={100} height={100}>
          <Layer>
            <Naught x={0} y={0} radius={50} />
          </Layer>
        </Stage>
      </header>
      <div className="App-main">
        <Board gameState={gameStates} />
      </div>
    </div>
  );
}

export default App;
