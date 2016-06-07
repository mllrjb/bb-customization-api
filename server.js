'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var path = require('path');
var db = require('./models/store');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());

app.use(swaggerize({
    api: path.resolve('./config/swagger.yml'),
    docspath: '/api-docs',
    handlers: path.resolve('./handlers')
}));

function _start() {
  console.log('Connecting to database...');
  db.sequelize.sync().then(function() {
    console.log('Successfully connected to database!');
    server.listen(8080, function migrated() {
        app.swagger.api.host = server.address().address + ':' + server.address().port;
    }); 
  }, function migrateFail(err) {
    console.log(err, err.stack);
    // wait 10 seconds and retry
    setTimeout(_start, 5000);
  });
}

_start();
