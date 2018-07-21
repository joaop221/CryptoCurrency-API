'use strict';

const objConsultaMoedasOn = require( './consulta-moedas-on');
const objConsultaMoedasValor = require( './consulta-moedas-valor');

function FnConsultaMoedasOn(request, response) {
    objConsultaMoedasOn.consultaMoedasOn(request, response);
}

function FnConsultaMoedasValor(request, response) {
    objConsultaMoedasValor.consultaMoedasValor(request, response);
}

module.exports = {
    consultaMoedasOn: FnConsultaMoedasOn,
    consultaMoedasValor: FnConsultaMoedasValor
};