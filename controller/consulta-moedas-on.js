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

const objService = require('../service');
 
function FnConsultaMoedasOn(request, response) {
    if (request) {
        response.send(objService.consultaMoedasOn());
    } else {
        response.send('Erro');
    }
}

module.exports.consultaMoedasOn = (request, response) => {
    FnConsultaMoedasOn(request, response);
}