/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */
/**
 * @swagger
 * path: /publico/moedas
 * operations:
 *   -  httpMethod: GET
 *      summary: Api de consulta a crypto moedas
 *      notes: Api de consulta a crypto moedas
 *      nickname: FnConsultaMoedas
 */
'use strict';
 
const objModel = require('../model');

function FnConsultaMoedasOn (request, response) {
    if (request) {
        response.send("Sucesso");
    } else {
        response.send("Erro");
    }
}

module.exports.consultaMoedasOn = (request, response) => {
    FnConsultaMoedasOn(request, response);
}