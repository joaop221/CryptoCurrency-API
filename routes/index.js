'use strict';

const express = require('express');
const router = express.Router();
const objController = require('../controller');

router.get('/publico/moedas', objController.consultaMoedasOn);

module.exports = router