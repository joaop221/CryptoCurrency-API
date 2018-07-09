
const express = require('express');
const config = require('config');

const app = express();
const port = config.get('port');
const routes = require('./routes');

routes.configure(app);

app.listen(port, () => {
  console.log('Server API listening on port: ' + port);
});