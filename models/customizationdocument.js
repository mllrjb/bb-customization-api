'use strict';

function CustomizationDocument(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.description = options.description;
    this.displayName = options.displayName;
    this.value = options.value;
    this.app = options.app;
}

module.exports = CustomizationDocument;
