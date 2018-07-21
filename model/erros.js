'use strict';

const objLodash = require('lodash');

function FnParseErros(erros, metodo) {
    let error = {
        msg: "Erro ao executar consulta no método: " + metodo,
        erro: objLodash.get(erros, 'message', {}),
    }

    return error;
}

module.exports.parseErros = (erros, metodo) => {
    return FnParseErros(erros, metodo);
} 