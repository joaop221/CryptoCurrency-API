'use strict'

const https = require('https');
const objConfig = require('config');
const objConstants = require('../utils/constants');

function FnExecutarHttpRequest(metodo, parametros, callback) {
    let path = objConfig.get('connector.rest.methods.' + metodo + '.svc');
    let options = {
        hostname: objConfig.get('connector.rest.baseUrl'),
        port: 443,
        path: path,
        method: objConfig.get('connector.rest.methods.' + metodo + '.method'),
        headers: path.includes('private') ? objConstants.HEADERS_PRIVATE : objConstants.HEADERS_PUBLIC
    }

    let httpRequest = https.request(options, (response) => {
        response.on('data', (data) => {
            callback(data);
        });
    });

    if (parametros) {
        httpRequest.write(parametros);
    }
    
    httpRequest.on('error', (error) => {
        console.error(error);
    });
    httpRequest.end();
}

module.exports = {
    executarHttpRequest: FnExecutarHttpRequest
}