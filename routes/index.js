'use strict';

const express = require('express');
const router = express.Router();
const objController = require('../controller');

router.get('/publico/moedas/on', objController.consultaMoedasOn);
router.get('/publico/moedas/valor', objController.consultaMoedasValor);

module.exports = router