'use strict';

const objLodash = require('lodash');

function FnParseErros(erros, metodo) {
    return {
        msg: "Erro ao executar consulta no método: " + metodo,
        erro: objLodash.get(erros, 'menssage', {}),
    }
}

module.exports.parseErros = (erros, metodo) => {
    FnParseErros(erros, metodo);
} 