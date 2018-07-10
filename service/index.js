'use strict';

const objConsultaMoedasOn = require( './consulta-moedas-on');

function FnConsultaMoedasOn(request, respCallback) {
    objConsultaMoedasOn.consultaMoedasOn(request, respCallback);
}

module.exports = {
    consultaMoedasOn: FnConsultaMoedasOn
};