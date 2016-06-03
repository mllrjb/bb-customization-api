'use strict';

var test = require('tape'),
    path = require('path'),
    express = require('express'),
    jsYaml = require('js-yaml'),
    fs = require('fs'),
    enjoi = require('enjoi'),
    swaggerize = require('swaggerize-express'),
    request = require('supertest');

test('api', function (t) {
    var app = express();

    
    app.use(require('body-parser')());

    app.use(swaggerize({
        api: path.join(__dirname, './../config/swagger.yml'),
        handlers: path.join(__dirname, '../handlers')
    }));

    
    t.test('test get /docs/{id}', function (t) {
        
        var responseSchema = enjoi({
            '$ref': "#/definitions/CustomizationDocument"
        }, {
                subSchemas: {
                    '#':  jsYaml.load(fs.readFileSync(path.join(__dirname, './../config/swagger.yml'))) 
                }
        });
        

        request(app).get('/v1/docs/helloworld')
        .end(function (err, res) {
            t.ok(!err, 'get /docs/{id} no error.');
            t.strictEqual(res.statusCode, 200, 'get /docs/{id} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    
    t.test('test put /docs/{id}', function (t) {
        
        var body = {
        };
        
        var responseSchema = enjoi({
            '$ref': "#/definitions/CustomizationDocument"
        }, {
                subSchemas: {
                    '#':  jsYaml.load(fs.readFileSync(path.join(__dirname, './../config/swagger.yml'))) 
                }
        });
        

        request(app).put('/v1/docs/helloworld').send(body)
        .end(function (err, res) {
            t.ok(!err, 'put /docs/{id} no error.');
            t.strictEqual(res.statusCode, 200, 'put /docs/{id} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
