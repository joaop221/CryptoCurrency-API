'use strict';

const objMoedasDisponiveis = require('./moedas-on');
const objErros = require('./erros');

function FnParseMoedasOn(currencys) {
    return objMoedasDisponiveis.parseMoedasOn(currencys);
}

function FnParseErros(erros, metodo) {
    return objErros.parseErros(erros, metodo);
}

module.exports = {
    parseMoedasOn: FnParseMoedasOn,
    parseErros: FnParseErros
};

