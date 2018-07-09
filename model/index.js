'use strict';

const objMoedasDisponiveis = require('./moedas-disponiveis');
const objErros = require('./erros');

function FnParseMoedasOn(currencys) {
    objMoedasDisponiveis.parseMoedasOn(currencys);
}

function FnParseErros(erros, metodo) {
    objErros.parseErros(erros, metodo);
}

module.exports = {
    parseMoedasOn: FnParseMoedasOn,
    parseErros: FnParseErros
};

