const express = require('express');
const app = express();
const port = 3001;
const router = require('./server/routes.js');
const bodyParser = require('body-parser');
const compression = require('compression');

app.use(compression());

app.use(bodyParser.json());

app.use(express.json());

app.use(express.static('dist'));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});