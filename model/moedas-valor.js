'use strict';

const objLodash = require('lodash');

function FnParseMoedasValor(currencys) {
    let moedas = [];

    for(let key of objLodash.keys(currencys)) {
        moedas.push({
            nome: objLodash.get(currencys[key], 'market', {}),
            valor: objLodash.get(currencys[key], 'last', {}),
            ativo: objLodash.get(currencys[key], 'active', {}) === 1,
        });
    }

    return moedas;
}

module.exports.parseMoedasValor = (currencys) => {
    return FnParseMoedasValor(currencys);
} 