'use strict';

const objModel = require('../model');
const objUtils = require('../utils/util');

function FnConsultaMoedasOn() {
    objUtils.executarHttpRequest('moedasOn', null, (response) => {
        if (response.statusCode === 200) {
            return objModel.parseMoedasOn(response)
        } else {
            return objModel.parseErros(response, "/publico/moedas");
        }
    });
}

module.exports.consultaMoedasOn = () => {
    FnConsultaMoedasOn();
}