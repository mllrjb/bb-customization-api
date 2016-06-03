'use strict';

var models = require('../../models/store/index');

/**
 * Operations on /docs/{id}
 */
module.exports = {
    /**
     * TODO
     * parameters: id
     * produces: 
     */
    get: function (req, res) {
        res.sendStatus(501);
    },
    /**
     * TODO
     * parameters: id, body
     * produces: 
     */
    put: function (req, res) {
        models.CustomizationDocument.create(req.body)
        .then(function createdDoc(doc) {
            res.json(doc);
        }, function createDocError(err) {
            console.log(err, err.stack);
            res.status(500).end();
        });
    }
};
