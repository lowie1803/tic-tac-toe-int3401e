# Tic-tac-toe Front End for int3401E

## Kickstart

`yarn add`

## To boot up FE server

`yarn start --port 3000`

## To boot up fake api server
`yarn json-server --watch fake-db/db.json --port 3001`

## Notes
Can create `config.yml` to config URL and PASSPHRASE

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
