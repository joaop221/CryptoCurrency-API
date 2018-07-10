'use strict'

const objConfig = require('config');
const objConstants = require('../utils/constants');

function FnMontaRestRequest(metodo, parametros) {
    return {
        url: objConfig.get('connector.rest.baseUrl') + objConfig.get('connector.rest.methods.' + metodo + '.svc'),
        method: objConfig.get('connector.rest.methods.' + metodo + '.method'),
        headers: objConstants.HEADERS_PUBLIC,
        body: parametros ? parametros.body : null
    };
}

module.exports = {
    montaRestRequest: FnMontaRestRequest
}