'use strict';

const objConsultaMoedasOn = require( './consulta-moedas-on');
const objConsultaMoedasValor = require( './consulta-moedas-valor');

function FnConsultaMoedasOn(request, respCallback) {
    objConsultaMoedasOn.consultaMoedasOn(request, respCallback);
}

function FnConsultaMoedasValor(request, respCallback) {
    objConsultaMoedasValor.consultaMoedasValor(request, respCallback);
}

module.exports = {
    consultaMoedasOn: FnConsultaMoedasOn,
    consultaMoedasValor: FnConsultaMoedasValor
};