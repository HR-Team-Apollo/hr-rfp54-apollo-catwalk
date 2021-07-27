const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api', (req, res) => {
  res.send('Hello from server');
  res.end();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});