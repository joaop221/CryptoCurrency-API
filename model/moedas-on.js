'use strict';

const objLodash = require('lodash');

function FnParseMoedasOn(currencys) {
    let moedas = [];

    for(let key of objLodash.keys(currencys)) {
        moedas.push({
            nome: objLodash.get(currencys[key], 'name', {}),
            taxaRetirada: objLodash.get(currencys[key], 'txWithdrawalFee', {}),
            porcentagemTaxaRetirada: objLodash.get(currencys[key], 'txWithdrawalPercentageFee', {}),
            minConf: objLodash.get(currencys[key], 'minConf', {}),
            minQuantidadeTrade: objLodash.get(currencys[key], 'minAmountTrade', {}),
            decimal: objLodash.get(currencys[key], 'decimal', {}),
            ativo: objLodash.get(currencys[key], 'active', {}) === 1,
        });
    }

    return moedas;
}

module.exports.parseMoedasOn = (currencys) => {
    return FnParseMoedasOn(currencys);
} 