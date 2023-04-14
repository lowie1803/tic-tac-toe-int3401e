import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

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


  console.log(gameStates);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
