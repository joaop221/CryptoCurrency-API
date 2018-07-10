'use strict';

const request = require('request');
const objModel = require('../model');
const objUtils = require('../utils/util');

function FnConsultaMoedasOn(objRequest, respCallback) {
    let objOptions = objUtils.montaRestRequest('moedasOn', null);

    request(objOptions, (error, response) => {
        if (!error && response.statusCode === 200) {
            let objRetorno = objModel.parseMoedasOn(JSON.parse(response.body));
            respCallback(null, objRetorno);
        } else {
            let objRetorno = objModel.parseErros(error, "/publico/moedas");
            respCallback(objRetorno, null);
        }
    });
}

module.exports.consultaMoedasOn = (objRequest, respCallback) => {
    FnConsultaMoedasOn(objRequest, respCallback);
}