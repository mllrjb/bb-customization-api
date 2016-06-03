# swagger-example

```json
{
  "swagger": "2.0",
  "info": {
    "title": "Propel Customization API",
    "description": "Customize your app with the Propel Customization API",
    "version": "1.0.0"
  },
  "host": "api.propel.com",
  "schemes": [
    "http"
  ],
  "basePath": "/v1",
  "produces": [
    "application/json"
  ],
  "paths": {
    "/docs": {
      "get": {
        "summary": "Customization Documents",
        "description": "TODO",
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "document identifier (supports wildcards)",
            "required": false,
            "type": "string"
          },
          {
            "name": "value",
            "in": "query",
            "description": "document value (supports wildcards)",
            "required": false,
            "type": "string"
          },
          {
            "name": "app",
            "in": "query",
            "description": "associated application",
            "required": false,
            "type": "string"
          }
        ],
        "tags": [
          "Customization"
        ],
        "responses": {
          "200": {
            "description": "An array of documents",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CustomizationDocument"
              }
            }
          },
          "default": {
            "description": "Unexpected error",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/docs/{id}": {
      "get": {
        "summary": "Retrieve Customization Document",
        "description": "TODO",
        "parameters": [
          {
            "name": "id",
            "description": "document identifier",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "tags": [
          "Customization"
        ],
        "responses": {
          "200": {
            "description": "A customization document",
            "schema": {
              "$ref": "#/definitions/CustomizationDocument"
            }
          },
          "default": {
            "description": "Unexpected error",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      },
      "put": {
        "summary": "Create or update Customization Document",
        "description": "TODO",
        "parameters": [
          {
            "name": "id",
            "description": "document identifier",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CustomizationDocument"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "A customization document",
            "schema": {
              "$ref": "#/definitions/CustomizationDocument"
            }
          },
          "default": {
            "description": "Unexpected error",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "CustomizationDocument": {
      "type": "object",
      "properties": {
        "doc_id": {
          "type": "string",
          "description": "Unique identifier for the customization document."
        },
        "description": {
          "type": "string",
          "description": "Description of document."
        },
        "display_name": {
          "type": "string",
          "description": "Display name of document."
        },
        "value": {
          "type": [
            "integer",
            "string",
            "object"
          ],
          "description": "Document value."
        },
        "app": {
          "type": [
            "array",
            "string"
          ],
          "items": {
            "type": "string"
          },
          "description": "associated applications"
        }
      }
    },
    "Error": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        },
        "fields": {
          "type": "string"
        }
      }
    }
  }
}
```
