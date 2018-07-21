'use strict';

const objMoedasOn = require('./moedas-on');
const objMoedasValor = require('./moedas-valor');
const objErros = require('./erros');

function FnParseMoedasOn(currencys) {
    return objMoedasOn.parseMoedasOn(currencys);
}

function FnParseMoedasValor(currencys) {
    return objMoedasValor.parseMoedasValor(currencys);
}

function FnParseErros(erros, metodo) {
    return objErros.parseErros(erros, metodo);
}

module.exports = {
    parseMoedasOn: FnParseMoedasOn,
    parseMoedasValor: FnParseMoedasValor,
    parseErros: FnParseErros
};

