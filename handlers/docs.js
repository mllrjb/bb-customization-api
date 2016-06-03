'use strict';

var models = require('../models/store/index');

/**
 * Operations on /docs
 */
module.exports = {
    /**
     * TODO
     * parameters: id, value, app
     * produces: 
     */
    get: function (req, res) {
  		models.CustomizationDocument.findAll({})
  		.then(function foundDocs(docs) {
  			res.json(docs);
  		}, function findDocsError(err) {
  			console.log(err, err.stack);
  			res.status(500).end();
  		})      
    }
};
