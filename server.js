// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const app            = express();
const port = 8000;

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('Server API listening on port: ' + port);
});