'use strict';

const objLodash = require('lodash');

function FnParseMoedasDisponiveis(currencys) {
    let moedas = [];

    for(var key in objLodash.keys(currencys)) {
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
}

module.exports.parseMoedasDisponiveis = (currencys) => {
    FnParseMoedasDisponiveis(currencys);
} 