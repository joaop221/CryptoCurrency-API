'use strict';

const request = require('request');
const objModel = require('../model');
const objUtils = require('../utils/util');

function FnConsultaMoedasValor(objRequest, respCallback) {
    let objOptions = objUtils.montaRestRequest('moedasValor', null);

    request(objOptions, (error, response) => {
        if (!error && response.statusCode === 200) {
            let objRetorno = objModel.parseMoedasValor(JSON.parse(response.body));
            respCallback(null, objRetorno);
        } else {
            let objRetorno = objModel.parseErros(error, "/publico/moedas/valor");
            respCallback(objRetorno, null);
        }
    });
}

module.exports.consultaMoedasValor = (objRequest, respCallback) => {
    FnConsultaMoedasValor(objRequest, respCallback);
}