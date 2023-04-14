import './App.css';
import { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import { Stage, Layer } from 'react-konva';
import Cross from './pieces/Cross';
import Naught from './pieces/Naught';
import Board from './board/Board';
import NameCard from './NameCard';

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

  const [config, setConfig] = useState({
    server_url: "http://localhost",
    passphrase: "something cool",
    frontend_port: 3000,
    fakedb_port: 3001
  });

  useEffect(() => {
    fetch('/config.yml')
      .then(response => response.text())
      .then(yamlText => yaml.load(yamlText))
      .then(data => setConfig(data));
  }, []);


  useEffect(() => {
    fetch(`${config.server_url || "http://localhost"}:${config.fakedb_port || 3001}/game_states`)
      .then((response) => response.json())
      .then((data) => setGameStates(data));
  }, []);


  // console.log(gameStates);
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
        />
        <p>INT3401E 22 Tic-tac-toe Battle Commence!</p>
        <NameCard
          name={gameStates.team2_id}
          score={gameStates.score2}
          avatar="https://i.redd.it/tnpjnvyab2z31.png"
          timeLeft={gameStates.time2}
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
