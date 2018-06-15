var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
        return req.headers.authorization.split(' ')[1];
    }

    return null;
}

var auth = {
    required: jwt({
        secret: secret,
        userProperty: 'payload',
        getTokenFromHeader: getTokenFromHeader
    }),
    optional: jwt({
        secret: secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getTokenFromHeader: getTokenFromHeader

    })
};

module.exports = auth;
