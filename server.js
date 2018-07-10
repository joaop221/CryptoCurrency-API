
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

const app = express();
const port = config.get('port');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, () => {
  console.log('Server API listening at http://localhost:' + port);
});