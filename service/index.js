'use strict';

const objConsultaMoedasOn = require( './consulta-moedas-on');

function FnConsultaMoedasOn(request, response) {
    objConsultaMoedasOn.consultaMoedasOn(request, response);
}

module.exports = {
    consultaMoedasOn: FnConsultaMoedasOn
};