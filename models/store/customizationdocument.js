'use strict';
module.exports = function(sequelize, DataTypes) {
  var CustomizationDocument = sequelize.define('CustomizationDocument', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.JSONB,
    app: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CustomizationDocument;
};
