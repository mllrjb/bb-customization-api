'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var path = require('path');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());

app.use(swaggerize({
    api: path.resolve('./config/swagger.yml'),
    docspath: '/api-docs',
    handlers: path.resolve('./handlers')
}));

server.listen(8080, function () {
    app.swagger.api.host = server.address().address + ':' + server.address().port;
});
