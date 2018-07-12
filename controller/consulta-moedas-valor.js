/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */
/**
 * @swagger
 * path: /publico/moedas/valor
 * operations:
 *   -  httpMethod: GET
 *      summary: Api de consulta a valor de crypto moedas
 *      notes: Api de consulta a valor de crypto moedas
 *      nickname: FnConsultaMoedasValor
 */
'use strict';

const objService = require('../service');

function FnConsultaMoedasValor(request, response) {
    if (request) {
        objService.consultaMoedasValor(request, (objError, objResponse) => {
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

module.exports.consultaMoedasValor = (request, response) => {
    FnConsultaMoedasValor(request, response);
}