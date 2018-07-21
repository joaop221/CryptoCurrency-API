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
        objService.consultaMoedasOn(request, (objError, objResponse) => {
            if (objError) {
                return response.status(500).json(objError).end();
            } else {
                return response.json(objResponse);
            }
        });
    } else {
        return response.status(500).json(objError).end();
    }
}

module.exports.consultaMoedasOn = (request, response) => {
    FnConsultaMoedasOn(request, response);
}