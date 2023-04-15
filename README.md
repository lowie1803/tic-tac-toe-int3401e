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
