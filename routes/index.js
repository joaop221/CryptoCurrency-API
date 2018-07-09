'use strict';

const objController = require('../controller');

module.exports.configure = (app) => {

    app.get('/publico/moedas', (req, res) => {
        objController.consultaMoedasOn(req, res)
    });
    
};