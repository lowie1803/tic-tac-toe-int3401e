# Tic-tac-toe Front End for int3401E

## Kickstart

`yarn add`

Create a `config.yml` file, using samples from `sample-config.yml`.

## To boot up FE server

`yarn start --port 3000`

## To boot up fake api server
`yarn json-server --watch fake-db/db.json --port 3001`

## Notes
Can create `src/config.json` to config url, PASSPHRASE, and fetch_interval.

## Designs

The app is design to get data from fake db, which will be updated from server_judge.

The db is a JSON file located in `fake-db/db.json`. It has to have a `game_states` object
to read and to write in it. Can write to it using samples below.

The `fake-db/db.json` should be structured like this:

```json
{
  "game_states": {
    "match_id": 123, // id of match
    "status": "team1", // null, or id of winning team
    "size": 20, // size of board
    "board": [
      ["X", "", "", "", "", "", "", "", "", "", "", "", "X", "", "", "", "", "", "", ""],
      ["", "", "O", "", "", "", "", "", "", "", "", "", "", "", "", "", "O", "", "", ""],
      ["", "", "", "O", "", "", "", "", "", "", "", "", "", "", "O", "", "", "", "", ""],
      ["", "", "", "", "X", "", "", "", "", "", "X", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "O", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "X", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "O", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "O", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "X", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "X", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "X", "", "", "", "", "", "O", "", "", "", "", "", "", "", ""],
      ["", "", "", "O", "", "", "", "", "O", "", "", "", "X", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "O", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "X", "", "", "", "", "", "", "", "X", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "O", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "X", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "O", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "X", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "O"]
    ] // board content
    ,
    "time1": 52, // time left for team1
    "time2": 62, // time left for team2
    "team1_id": "team1", // id of team1
    "team2_id": "team2", // id of team2
    "turn": "team1", // null, or id of playing team
    "score1": 0, // score for team1
    "score2": 1 // score for team2
  }
}
```

### Sample js post request
```js
fetch('http://localhost:3001/game_states', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ your_json_here })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

```python
import requests
url = 'http://localhost:3001/game_states'
data = {} # your data
response = requests.post(url, json=data)
```
