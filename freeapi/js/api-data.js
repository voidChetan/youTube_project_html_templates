var jsonData =   {
  "openapi": "3.0.1",
  "info": {
    "title": "FreeProjectApi",
    "version": "1.0"
  },
  "paths": {
    "/api/Ecommerce/get-dashboard/{userId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/CreateCategoryWithChildren": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CategoryRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CategoryRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CategoryRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/GetCategoryWithChildrenById": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/CreateParentCategory": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComparentCategoryTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComparentCategoryTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComparentCategoryTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/GetParentCategories": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/DeleteParentCategory": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/CreateChildCategory": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComchildCategoryTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComchildCategoryTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComchildCategoryTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/GetChildCategories": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/DeleteChildCategory": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-products": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-products-by-child-category": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "childCategoryId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-products-by-parent-category/{parentCategoryId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "parentCategoryId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/CreateCompleteProduct": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ProductRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ProductRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ProductRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/updateCompleteProduct": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ProductRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ProductRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ProductRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/delete-product/{id}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/create-product": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-product/{id}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-product/{id}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/add-product-image": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductImagesTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductImagesTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductImagesTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-product-images/{productId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-product-image/{id}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductImagesTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductImagesTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductImagesTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/delete-product-image/{id}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/add-product-property": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductProperties"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductProperties"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductProperties"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-product-properties/{productId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-product-property/{id}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductProperties"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductProperties"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComproductProperties"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/delete-product-property/{id}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/create-customer": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-customers": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-customer/{id}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-customer/{id}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/delete-customer/{id}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/create-address": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerAddressTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerAddressTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerAddressTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-addresses/{custId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "custId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-address/{addressId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "addressId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-address/{addressId}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "addressId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerAddressTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerAddressTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComcustomerAddressTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/delete-address/{addressId}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "addressId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/add-to-cart": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcartTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcartTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComcartTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-cart-items": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userid",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-cart-by-customer/{custId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "custId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-cart-item/{cartId}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "cartId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcartTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComcartTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComcartTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/remove-cart-item/{cartId}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "cartId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/clear-cart/{custId}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "custId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/place-order/{custId}/{addressId}": {
      "post": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "custId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "addressId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-orders": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "userid",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/get-order-details/{orderId}": {
      "get": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/update-order/{orderId}": {
      "put": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/eComorderTbl"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/eComorderTbl"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/eComorderTbl"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Ecommerce/cancel-order/{orderId}": {
      "delete": {
        "tags": [
          "Ecommerce"
        ],
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/GetAllUsers1": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/getAllUsers": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserMasterView"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserMasterView"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserMasterView"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/getUserById": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/register": {
      "post": {
        "tags": [
          "GoalTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserMasterView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserMasterView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserMasterView"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/login": {
      "post": {
        "tags": [
          "GoalTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserLogin"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserLogin"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserLogin"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserMasterNew"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/updateUser": {
      "put": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserMasterNew"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserMasterNew"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserMasterNew"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/deleteUserById": {
      "delete": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/getAllTasks": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/TaskView"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/TaskView"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/TaskView"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/getTask/{id}": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskModel"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskModel"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskModel"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/createTask": {
      "post": {
        "tags": [
          "GoalTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TaskModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/updateTask/{id}": {
      "put": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TaskModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/deleteTask/{id}": {
      "delete": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/getAllGoalsByUser": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/GoalViewList"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/GoalViewList"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/GoalViewList"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/getGoal/{id}": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GoalView"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GoalView"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GoalView"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/createGoalWithMilestones": {
      "post": {
        "tags": [
          "GoalTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GoalView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/GoalView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/GoalView"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GoalView"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GoalView"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GoalView"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/updateGoalWithMilestones/{id}": {
      "put": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GoalView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/GoalView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/GoalView"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/deleteGoal/{id}": {
      "delete": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/createReminder": {
      "post": {
        "tags": [
          "GoalTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reminder"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Reminder"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Reminder"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/Reminder"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reminder"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reminder"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/getReminders": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Reminder"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Reminder"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Reminder"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/getReminder/{id}": {
      "get": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/Reminder"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reminder"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reminder"
                }
              }
            }
          }
        }
      }
    },
    "/api/GoalTracker/updateReminder/{id}": {
      "put": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reminder"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Reminder"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Reminder"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/GoalTracker/deleteReminder/{id}": {
      "delete": {
        "tags": [
          "GoalTracker"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AggregateException": {
        "type": "object",
        "properties": {
          "targetSite": {
            "$ref": "#/components/schemas/MethodBase"
          },
          "data": {
            "type": "object",
            "additionalProperties": { },
            "nullable": true,
            "readOnly": true
          },
          "innerException": {
            "$ref": "#/components/schemas/Exception"
          },
          "helpLink": {
            "type": "string",
            "nullable": true
          },
          "source": {
            "type": "string",
            "nullable": true
          },
          "hResult": {
            "type": "integer",
            "format": "int32"
          },
          "stackTrace": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "innerExceptions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Exception"
            },
            "nullable": true,
            "readOnly": true
          },
          "message": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "ApiResponse": {
        "type": "object",
        "properties": {
          "message": {
            "type": "string",
            "nullable": true
          },
          "result": {
            "type": "boolean"
          },
          "data": {
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "Assembly": {
        "type": "object",
        "properties": {
          "definedTypes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TypeInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "exportedTypes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Type"
            },
            "nullable": true,
            "readOnly": true
          },
          "codeBase": {
            "type": "string",
            "nullable": true,
            "readOnly": true,
            "deprecated": true
          },
          "entryPoint": {
            "$ref": "#/components/schemas/MethodInfo"
          },
          "fullName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "imageRuntimeVersion": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "isDynamic": {
            "type": "boolean",
            "readOnly": true
          },
          "location": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "reflectionOnly": {
            "type": "boolean",
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "isFullyTrusted": {
            "type": "boolean",
            "readOnly": true
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "escapedCodeBase": {
            "type": "string",
            "nullable": true,
            "readOnly": true,
            "deprecated": true
          },
          "manifestModule": {
            "$ref": "#/components/schemas/Module"
          },
          "modules": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Module"
            },
            "nullable": true,
            "readOnly": true
          },
          "globalAssemblyCache": {
            "type": "boolean",
            "readOnly": true,
            "deprecated": true
          },
          "hostContext": {
            "type": "integer",
            "format": "int64",
            "readOnly": true
          },
          "securityRuleSet": {
            "$ref": "#/components/schemas/SecurityRuleSet"
          }
        },
        "additionalProperties": false
      },
      "CallingConventions": {
        "enum": [
          1,
          2,
          3,
          32,
          64
        ],
        "type": "integer",
        "format": "int32"
      },
      "CategoryRequest": {
        "type": "object",
        "properties": {
          "parentCategory": {
            "$ref": "#/components/schemas/eComparentCategoryTbl"
          },
          "childCategories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/eComchildCategoryTbl"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ConstructorInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "attributes": {
            "$ref": "#/components/schemas/MethodAttributes"
          },
          "methodImplementationFlags": {
            "$ref": "#/components/schemas/MethodImplAttributes"
          },
          "callingConvention": {
            "$ref": "#/components/schemas/CallingConventions"
          },
          "isAbstract": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructor": {
            "type": "boolean",
            "readOnly": true
          },
          "isFinal": {
            "type": "boolean",
            "readOnly": true
          },
          "isHideBySig": {
            "type": "boolean",
            "readOnly": true
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "isStatic": {
            "type": "boolean",
            "readOnly": true
          },
          "isVirtual": {
            "type": "boolean",
            "readOnly": true
          },
          "isAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamily": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyAndAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyOrAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isPrivate": {
            "type": "boolean",
            "readOnly": true
          },
          "isPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructedGenericMethod": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethod": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethodDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "containsGenericParameters": {
            "type": "boolean",
            "readOnly": true
          },
          "methodHandle": {
            "$ref": "#/components/schemas/RuntimeMethodHandle"
          },
          "isSecurityCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecuritySafeCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityTransparent": {
            "type": "boolean",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          }
        },
        "additionalProperties": false
      },
      "CustomAttributeData": {
        "type": "object",
        "properties": {
          "attributeType": {
            "$ref": "#/components/schemas/Type"
          },
          "constructor": {
            "$ref": "#/components/schemas/ConstructorInfo"
          },
          "constructorArguments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeTypedArgument"
            },
            "nullable": true,
            "readOnly": true
          },
          "namedArguments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeNamedArgument"
            },
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "CustomAttributeNamedArgument": {
        "type": "object",
        "properties": {
          "memberInfo": {
            "$ref": "#/components/schemas/MemberInfo"
          },
          "typedValue": {
            "$ref": "#/components/schemas/CustomAttributeTypedArgument"
          },
          "memberName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "isField": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "CustomAttributeTypedArgument": {
        "type": "object",
        "properties": {
          "argumentType": {
            "$ref": "#/components/schemas/Type"
          },
          "value": {
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "EventAttributes": {
        "enum": [
          0,
          512,
          1024
        ],
        "type": "integer",
        "format": "int32"
      },
      "EventInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "attributes": {
            "$ref": "#/components/schemas/EventAttributes"
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "addMethod": {
            "$ref": "#/components/schemas/MethodInfo"
          },
          "removeMethod": {
            "$ref": "#/components/schemas/MethodInfo"
          },
          "raiseMethod": {
            "$ref": "#/components/schemas/MethodInfo"
          },
          "isMulticast": {
            "type": "boolean",
            "readOnly": true
          },
          "eventHandlerType": {
            "$ref": "#/components/schemas/Type"
          }
        },
        "additionalProperties": false
      },
      "Exception": {
        "type": "object",
        "properties": {
          "targetSite": {
            "$ref": "#/components/schemas/MethodBase"
          },
          "message": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "data": {
            "type": "object",
            "additionalProperties": { },
            "nullable": true,
            "readOnly": true
          },
          "innerException": {
            "$ref": "#/components/schemas/Exception"
          },
          "helpLink": {
            "type": "string",
            "nullable": true
          },
          "source": {
            "type": "string",
            "nullable": true
          },
          "hResult": {
            "type": "integer",
            "format": "int32"
          },
          "stackTrace": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "FieldAttributes": {
        "enum": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          16,
          32,
          64,
          128,
          256,
          512,
          1024,
          4096,
          8192,
          32768,
          38144
        ],
        "type": "integer",
        "format": "int32"
      },
      "FieldInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "attributes": {
            "$ref": "#/components/schemas/FieldAttributes"
          },
          "fieldType": {
            "$ref": "#/components/schemas/Type"
          },
          "isInitOnly": {
            "type": "boolean",
            "readOnly": true
          },
          "isLiteral": {
            "type": "boolean",
            "readOnly": true
          },
          "isNotSerialized": {
            "type": "boolean",
            "readOnly": true,
            "deprecated": true
          },
          "isPinvokeImpl": {
            "type": "boolean",
            "readOnly": true
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "isStatic": {
            "type": "boolean",
            "readOnly": true
          },
          "isAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamily": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyAndAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyOrAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isPrivate": {
            "type": "boolean",
            "readOnly": true
          },
          "isPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecuritySafeCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityTransparent": {
            "type": "boolean",
            "readOnly": true
          },
          "fieldHandle": {
            "$ref": "#/components/schemas/RuntimeFieldHandle"
          }
        },
        "additionalProperties": false
      },
      "GenericParameterAttributes": {
        "enum": [
          0,
          1,
          2,
          3,
          4,
          8,
          16,
          28
        ],
        "type": "integer",
        "format": "int32"
      },
      "GoalView": {
        "type": "object",
        "properties": {
          "goalId": {
            "type": "integer",
            "format": "int32"
          },
          "goalName": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "isAchieved": {
            "type": "boolean"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "milestones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MilestoneView"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "GoalViewList": {
        "type": "object",
        "properties": {
          "goalId": {
            "type": "integer",
            "format": "int32"
          },
          "goalName": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "isAchieved": {
            "type": "boolean"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "ICustomAttributeProvider": {
        "type": "object",
        "additionalProperties": false
      },
      "IntPtr": {
        "type": "object",
        "additionalProperties": false
      },
      "LayoutKind": {
        "enum": [
          0,
          2,
          3
        ],
        "type": "integer",
        "format": "int32"
      },
      "MemberInfo": {
        "type": "object",
        "properties": {
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "MemberTypes": {
        "enum": [
          1,
          2,
          4,
          8,
          16,
          32,
          64,
          128,
          191
        ],
        "type": "integer",
        "format": "int32"
      },
      "MethodAttributes": {
        "enum": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          16,
          32,
          64,
          128,
          256,
          512,
          1024,
          2048,
          4096,
          8192,
          16384,
          32768,
          53248
        ],
        "type": "integer",
        "format": "int32"
      },
      "MethodBase": {
        "type": "object",
        "properties": {
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "attributes": {
            "$ref": "#/components/schemas/MethodAttributes"
          },
          "methodImplementationFlags": {
            "$ref": "#/components/schemas/MethodImplAttributes"
          },
          "callingConvention": {
            "$ref": "#/components/schemas/CallingConventions"
          },
          "isAbstract": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructor": {
            "type": "boolean",
            "readOnly": true
          },
          "isFinal": {
            "type": "boolean",
            "readOnly": true
          },
          "isHideBySig": {
            "type": "boolean",
            "readOnly": true
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "isStatic": {
            "type": "boolean",
            "readOnly": true
          },
          "isVirtual": {
            "type": "boolean",
            "readOnly": true
          },
          "isAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamily": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyAndAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyOrAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isPrivate": {
            "type": "boolean",
            "readOnly": true
          },
          "isPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructedGenericMethod": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethod": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethodDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "containsGenericParameters": {
            "type": "boolean",
            "readOnly": true
          },
          "methodHandle": {
            "$ref": "#/components/schemas/RuntimeMethodHandle"
          },
          "isSecurityCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecuritySafeCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityTransparent": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "MethodImplAttributes": {
        "enum": [
          0,
          1,
          2,
          3,
          4,
          8,
          16,
          32,
          64,
          128,
          256,
          512,
          4096,
          65535
        ],
        "type": "integer",
        "format": "int32"
      },
      "MethodInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "attributes": {
            "$ref": "#/components/schemas/MethodAttributes"
          },
          "methodImplementationFlags": {
            "$ref": "#/components/schemas/MethodImplAttributes"
          },
          "callingConvention": {
            "$ref": "#/components/schemas/CallingConventions"
          },
          "isAbstract": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructor": {
            "type": "boolean",
            "readOnly": true
          },
          "isFinal": {
            "type": "boolean",
            "readOnly": true
          },
          "isHideBySig": {
            "type": "boolean",
            "readOnly": true
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "isStatic": {
            "type": "boolean",
            "readOnly": true
          },
          "isVirtual": {
            "type": "boolean",
            "readOnly": true
          },
          "isAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamily": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyAndAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isFamilyOrAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isPrivate": {
            "type": "boolean",
            "readOnly": true
          },
          "isPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructedGenericMethod": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethod": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethodDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "containsGenericParameters": {
            "type": "boolean",
            "readOnly": true
          },
          "methodHandle": {
            "$ref": "#/components/schemas/RuntimeMethodHandle"
          },
          "isSecurityCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecuritySafeCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityTransparent": {
            "type": "boolean",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "returnParameter": {
            "$ref": "#/components/schemas/ParameterInfo"
          },
          "returnType": {
            "$ref": "#/components/schemas/Type"
          },
          "returnTypeCustomAttributes": {
            "$ref": "#/components/schemas/ICustomAttributeProvider"
          }
        },
        "additionalProperties": false
      },
      "MilestoneView": {
        "type": "object",
        "properties": {
          "milestoneId": {
            "type": "integer",
            "format": "int32"
          },
          "milestoneName": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "targetDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "isCompleted": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "Module": {
        "type": "object",
        "properties": {
          "assembly": {
            "$ref": "#/components/schemas/Assembly"
          },
          "fullyQualifiedName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "mdStreamVersion": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "moduleVersionId": {
            "type": "string",
            "format": "uuid",
            "readOnly": true
          },
          "scopeName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "moduleHandle": {
            "$ref": "#/components/schemas/ModuleHandle"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "ModuleHandle": {
        "type": "object",
        "properties": {
          "mdStreamVersion": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "ParameterAttributes": {
        "enum": [
          0,
          1,
          2,
          4,
          8,
          16,
          4096,
          8192,
          16384,
          32768,
          61440
        ],
        "type": "integer",
        "format": "int32"
      },
      "ParameterInfo": {
        "type": "object",
        "properties": {
          "attributes": {
            "$ref": "#/components/schemas/ParameterAttributes"
          },
          "member": {
            "$ref": "#/components/schemas/MemberInfo"
          },
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "parameterType": {
            "$ref": "#/components/schemas/Type"
          },
          "position": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "isIn": {
            "type": "boolean",
            "readOnly": true
          },
          "isLcid": {
            "type": "boolean",
            "readOnly": true
          },
          "isOptional": {
            "type": "boolean",
            "readOnly": true
          },
          "isOut": {
            "type": "boolean",
            "readOnly": true
          },
          "isRetval": {
            "type": "boolean",
            "readOnly": true
          },
          "defaultValue": {
            "nullable": true,
            "readOnly": true
          },
          "rawDefaultValue": {
            "nullable": true,
            "readOnly": true
          },
          "hasDefaultValue": {
            "type": "boolean",
            "readOnly": true
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "ProductRequest": {
        "type": "object",
        "properties": {
          "product": {
            "$ref": "#/components/schemas/eComproductTbl"
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/eComproductImagesTbl"
            },
            "nullable": true
          },
          "properties": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/eComproductProperties"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "PropertyAttributes": {
        "enum": [
          0,
          512,
          1024,
          4096,
          8192,
          16384,
          32768,
          62464
        ],
        "type": "integer",
        "format": "int32"
      },
      "PropertyInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "propertyType": {
            "$ref": "#/components/schemas/Type"
          },
          "attributes": {
            "$ref": "#/components/schemas/PropertyAttributes"
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "canRead": {
            "type": "boolean",
            "readOnly": true
          },
          "canWrite": {
            "type": "boolean",
            "readOnly": true
          },
          "getMethod": {
            "$ref": "#/components/schemas/MethodInfo"
          },
          "setMethod": {
            "$ref": "#/components/schemas/MethodInfo"
          }
        },
        "additionalProperties": false
      },
      "Reminder": {
        "required": [
          "reminderDateTime",
          "title"
        ],
        "type": "object",
        "properties": {
          "reminderId": {
            "type": "integer",
            "format": "int32"
          },
          "title": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "reminderDateTime": {
            "type": "string",
            "format": "date-time"
          },
          "isAcknowledged": {
            "type": "boolean"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "RuntimeFieldHandle": {
        "type": "object",
        "properties": {
          "value": {
            "$ref": "#/components/schemas/IntPtr"
          }
        },
        "additionalProperties": false
      },
      "RuntimeMethodHandle": {
        "type": "object",
        "properties": {
          "value": {
            "$ref": "#/components/schemas/IntPtr"
          }
        },
        "additionalProperties": false
      },
      "RuntimeTypeHandle": {
        "type": "object",
        "properties": {
          "value": {
            "$ref": "#/components/schemas/IntPtr"
          }
        },
        "additionalProperties": false
      },
      "SecurityRuleSet": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer",
        "format": "int32"
      },
      "StructLayoutAttribute": {
        "type": "object",
        "properties": {
          "typeId": {
            "nullable": true,
            "readOnly": true
          },
          "value": {
            "$ref": "#/components/schemas/LayoutKind"
          }
        },
        "additionalProperties": false
      },
      "Task": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "exception": {
            "$ref": "#/components/schemas/AggregateException"
          },
          "status": {
            "$ref": "#/components/schemas/TaskStatus"
          },
          "isCanceled": {
            "type": "boolean",
            "readOnly": true
          },
          "isCompleted": {
            "type": "boolean",
            "readOnly": true
          },
          "isCompletedSuccessfully": {
            "type": "boolean",
            "readOnly": true
          },
          "creationOptions": {
            "$ref": "#/components/schemas/TaskCreationOptions"
          },
          "asyncState": {
            "nullable": true,
            "readOnly": true
          },
          "isFaulted": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "TaskCreationOptions": {
        "enum": [
          0,
          1,
          2,
          4,
          8,
          16,
          64
        ],
        "type": "integer",
        "format": "int32"
      },
      "TaskModel": {
        "required": [
          "frequency",
          "taskName"
        ],
        "type": "object",
        "properties": {
          "taskId": {
            "type": "integer",
            "format": "int32"
          },
          "taskName": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "frequency": {
            "minLength": 1,
            "pattern": "^(Daily|Weekly|Monthly)$",
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "dueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "isCompleted": {
            "type": "boolean"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "TaskStatus": {
        "enum": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "type": "integer",
        "format": "int32"
      },
      "TaskView": {
        "type": "object",
        "properties": {
          "taskId": {
            "type": "integer",
            "format": "int32"
          },
          "taskName": {
            "type": "string",
            "nullable": true
          },
          "frequency": {
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "dueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "isCompleted": {
            "type": "boolean"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "Type": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "isInterface": {
            "type": "boolean",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "namespace": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "assemblyQualifiedName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "fullName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "assembly": {
            "$ref": "#/components/schemas/Assembly"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "isNested": {
            "type": "boolean",
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "declaringMethod": {
            "$ref": "#/components/schemas/MethodBase"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "underlyingSystemType": {
            "$ref": "#/components/schemas/Type"
          },
          "isTypeDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "isArray": {
            "type": "boolean",
            "readOnly": true
          },
          "isByRef": {
            "type": "boolean",
            "readOnly": true
          },
          "isPointer": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructedGenericType": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericParameter": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericTypeParameter": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethodParameter": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericType": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericTypeDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "isSZArray": {
            "type": "boolean",
            "readOnly": true
          },
          "isVariableBoundArray": {
            "type": "boolean",
            "readOnly": true
          },
          "isByRefLike": {
            "type": "boolean",
            "readOnly": true
          },
          "isFunctionPointer": {
            "type": "boolean",
            "readOnly": true
          },
          "isUnmanagedFunctionPointer": {
            "type": "boolean",
            "readOnly": true
          },
          "hasElementType": {
            "type": "boolean",
            "readOnly": true
          },
          "genericTypeArguments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Type"
            },
            "nullable": true,
            "readOnly": true
          },
          "genericParameterPosition": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "genericParameterAttributes": {
            "$ref": "#/components/schemas/GenericParameterAttributes"
          },
          "attributes": {
            "$ref": "#/components/schemas/TypeAttributes"
          },
          "isAbstract": {
            "type": "boolean",
            "readOnly": true
          },
          "isImport": {
            "type": "boolean",
            "readOnly": true
          },
          "isSealed": {
            "type": "boolean",
            "readOnly": true
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "isClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedFamANDAssem": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedFamily": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedFamORAssem": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedPrivate": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isNotPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isAutoLayout": {
            "type": "boolean",
            "readOnly": true
          },
          "isExplicitLayout": {
            "type": "boolean",
            "readOnly": true
          },
          "isLayoutSequential": {
            "type": "boolean",
            "readOnly": true
          },
          "isAnsiClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isAutoClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isUnicodeClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isCOMObject": {
            "type": "boolean",
            "readOnly": true
          },
          "isContextful": {
            "type": "boolean",
            "readOnly": true
          },
          "isEnum": {
            "type": "boolean",
            "readOnly": true
          },
          "isMarshalByRef": {
            "type": "boolean",
            "readOnly": true
          },
          "isPrimitive": {
            "type": "boolean",
            "readOnly": true
          },
          "isValueType": {
            "type": "boolean",
            "readOnly": true
          },
          "isSignatureType": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecuritySafeCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityTransparent": {
            "type": "boolean",
            "readOnly": true
          },
          "structLayoutAttribute": {
            "$ref": "#/components/schemas/StructLayoutAttribute"
          },
          "typeInitializer": {
            "$ref": "#/components/schemas/ConstructorInfo"
          },
          "typeHandle": {
            "$ref": "#/components/schemas/RuntimeTypeHandle"
          },
          "guid": {
            "type": "string",
            "format": "uuid",
            "readOnly": true
          },
          "baseType": {
            "$ref": "#/components/schemas/Type"
          },
          "isSerializable": {
            "type": "boolean",
            "readOnly": true,
            "deprecated": true
          },
          "containsGenericParameters": {
            "type": "boolean",
            "readOnly": true
          },
          "isVisible": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "TypeAttributes": {
        "enum": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          16,
          24,
          32,
          128,
          256,
          1024,
          2048,
          4096,
          8192,
          16384,
          65536,
          131072,
          196608,
          262144,
          264192,
          1048576,
          12582912
        ],
        "type": "integer",
        "format": "int32"
      },
      "TypeInfo": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "customAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomAttributeData"
            },
            "nullable": true,
            "readOnly": true
          },
          "isCollectible": {
            "type": "boolean",
            "readOnly": true
          },
          "metadataToken": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "isInterface": {
            "type": "boolean",
            "readOnly": true
          },
          "memberType": {
            "$ref": "#/components/schemas/MemberTypes"
          },
          "namespace": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "assemblyQualifiedName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "fullName": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "assembly": {
            "$ref": "#/components/schemas/Assembly"
          },
          "module": {
            "$ref": "#/components/schemas/Module"
          },
          "isNested": {
            "type": "boolean",
            "readOnly": true
          },
          "declaringType": {
            "$ref": "#/components/schemas/Type"
          },
          "declaringMethod": {
            "$ref": "#/components/schemas/MethodBase"
          },
          "reflectedType": {
            "$ref": "#/components/schemas/Type"
          },
          "underlyingSystemType": {
            "$ref": "#/components/schemas/Type"
          },
          "isTypeDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "isArray": {
            "type": "boolean",
            "readOnly": true
          },
          "isByRef": {
            "type": "boolean",
            "readOnly": true
          },
          "isPointer": {
            "type": "boolean",
            "readOnly": true
          },
          "isConstructedGenericType": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericParameter": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericTypeParameter": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericMethodParameter": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericType": {
            "type": "boolean",
            "readOnly": true
          },
          "isGenericTypeDefinition": {
            "type": "boolean",
            "readOnly": true
          },
          "isSZArray": {
            "type": "boolean",
            "readOnly": true
          },
          "isVariableBoundArray": {
            "type": "boolean",
            "readOnly": true
          },
          "isByRefLike": {
            "type": "boolean",
            "readOnly": true
          },
          "isFunctionPointer": {
            "type": "boolean",
            "readOnly": true
          },
          "isUnmanagedFunctionPointer": {
            "type": "boolean",
            "readOnly": true
          },
          "hasElementType": {
            "type": "boolean",
            "readOnly": true
          },
          "genericTypeArguments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Type"
            },
            "nullable": true,
            "readOnly": true
          },
          "genericParameterPosition": {
            "type": "integer",
            "format": "int32",
            "readOnly": true
          },
          "genericParameterAttributes": {
            "$ref": "#/components/schemas/GenericParameterAttributes"
          },
          "attributes": {
            "$ref": "#/components/schemas/TypeAttributes"
          },
          "isAbstract": {
            "type": "boolean",
            "readOnly": true
          },
          "isImport": {
            "type": "boolean",
            "readOnly": true
          },
          "isSealed": {
            "type": "boolean",
            "readOnly": true
          },
          "isSpecialName": {
            "type": "boolean",
            "readOnly": true
          },
          "isClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedAssembly": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedFamANDAssem": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedFamily": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedFamORAssem": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedPrivate": {
            "type": "boolean",
            "readOnly": true
          },
          "isNestedPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isNotPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isPublic": {
            "type": "boolean",
            "readOnly": true
          },
          "isAutoLayout": {
            "type": "boolean",
            "readOnly": true
          },
          "isExplicitLayout": {
            "type": "boolean",
            "readOnly": true
          },
          "isLayoutSequential": {
            "type": "boolean",
            "readOnly": true
          },
          "isAnsiClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isAutoClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isUnicodeClass": {
            "type": "boolean",
            "readOnly": true
          },
          "isCOMObject": {
            "type": "boolean",
            "readOnly": true
          },
          "isContextful": {
            "type": "boolean",
            "readOnly": true
          },
          "isEnum": {
            "type": "boolean",
            "readOnly": true
          },
          "isMarshalByRef": {
            "type": "boolean",
            "readOnly": true
          },
          "isPrimitive": {
            "type": "boolean",
            "readOnly": true
          },
          "isValueType": {
            "type": "boolean",
            "readOnly": true
          },
          "isSignatureType": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecuritySafeCritical": {
            "type": "boolean",
            "readOnly": true
          },
          "isSecurityTransparent": {
            "type": "boolean",
            "readOnly": true
          },
          "structLayoutAttribute": {
            "$ref": "#/components/schemas/StructLayoutAttribute"
          },
          "typeInitializer": {
            "$ref": "#/components/schemas/ConstructorInfo"
          },
          "typeHandle": {
            "$ref": "#/components/schemas/RuntimeTypeHandle"
          },
          "guid": {
            "type": "string",
            "format": "uuid",
            "readOnly": true
          },
          "baseType": {
            "$ref": "#/components/schemas/Type"
          },
          "isSerializable": {
            "type": "boolean",
            "readOnly": true,
            "deprecated": true
          },
          "containsGenericParameters": {
            "type": "boolean",
            "readOnly": true
          },
          "isVisible": {
            "type": "boolean",
            "readOnly": true
          },
          "genericTypeParameters": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Type"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredConstructors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ConstructorInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredEvents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/EventInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FieldInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredMembers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MemberInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredMethods": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MethodInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredNestedTypes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TypeInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "declaredProperties": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PropertyInfo"
            },
            "nullable": true,
            "readOnly": true
          },
          "implementedInterfaces": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Type"
            },
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "UserLogin": {
        "required": [
          "emailId",
          "password"
        ],
        "type": "object",
        "properties": {
          "emailId": {
            "minLength": 1,
            "type": "string"
          },
          "password": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "UserMasterNew": {
        "required": [
          "createdDate",
          "emailId",
          "fullName",
          "mobileNo",
          "password",
          "projectName"
        ],
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "emailId": {
            "minLength": 1,
            "type": "string"
          },
          "password": {
            "minLength": 1,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "projectName": {
            "minLength": 1,
            "type": "string"
          },
          "fullName": {
            "minLength": 1,
            "type": "string"
          },
          "mobileNo": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "UserMasterView": {
        "required": [
          "emailId",
          "fullName",
          "mobileNo",
          "password"
        ],
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "emailId": {
            "minLength": 1,
            "type": "string"
          },
          "password": {
            "minLength": 1,
            "type": "string"
          },
          "fullName": {
            "minLength": 1,
            "type": "string"
          },
          "mobileNo": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "eComcartTbl": {
        "required": [
          "createdDate",
          "custId",
          "isOrderPlaced",
          "productId",
          "quantity",
          "userId"
        ],
        "type": "object",
        "properties": {
          "cartId": {
            "type": "integer",
            "format": "int32"
          },
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "isOrderPlaced": {
            "type": "boolean"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "eComchildCategoryTbl": {
        "required": [
          "childCategoryName",
          "parentCategoryId"
        ],
        "type": "object",
        "properties": {
          "childCategoryId": {
            "type": "integer",
            "format": "int32"
          },
          "parentCategoryId": {
            "type": "integer",
            "format": "int32"
          },
          "childCategoryName": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "logo": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "eComcustomerAddressTbl": {
        "required": [
          "addressLine2",
          "city",
          "custId",
          "title"
        ],
        "type": "object",
        "properties": {
          "addressId": {
            "type": "integer",
            "format": "int32"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "title": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "city": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "addressLine1": {
            "maxLength": 500,
            "minLength": 0,
            "type": "string",
            "nullable": true
          },
          "addressLine2": {
            "maxLength": 500,
            "minLength": 0,
            "type": "string"
          },
          "pinCode": {
            "maxLength": 6,
            "minLength": 0,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "eComcustomerTbl": {
        "required": [
          "fullName",
          "mobileNo",
          "userId"
        ],
        "type": "object",
        "properties": {
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "mobileNo": {
            "maxLength": 10,
            "minLength": 0,
            "type": "string"
          },
          "email": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string",
            "nullable": true
          },
          "fullName": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "eComorderTbl": {
        "required": [
          "addressId",
          "custId",
          "orderDate",
          "totalAmount",
          "userId"
        ],
        "type": "object",
        "properties": {
          "orderId": {
            "type": "integer",
            "format": "int32"
          },
          "orderDate": {
            "type": "string",
            "format": "date-time"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "totalAmount": {
            "type": "number",
            "format": "double"
          },
          "paymentNaration": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string",
            "nullable": true
          },
          "addressId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "eComparentCategoryTbl": {
        "required": [
          "parentCategoryName",
          "userId"
        ],
        "type": "object",
        "properties": {
          "parentCategoryId": {
            "type": "integer",
            "format": "int32"
          },
          "parentCategoryName": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "logo": {
            "maxLength": 10,
            "minLength": 0,
            "type": "string",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "eComproductImagesTbl": {
        "required": [
          "imageName",
          "productId"
        ],
        "type": "object",
        "properties": {
          "imageId": {
            "type": "integer",
            "format": "int32"
          },
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "imageName": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "eComproductProperties": {
        "required": [
          "productId",
          "propertyName",
          "propoertyValue"
        ],
        "type": "object",
        "properties": {
          "propertiesId": {
            "type": "integer",
            "format": "int32"
          },
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyName": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "propoertyValue": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "eComproductTbl": {
        "required": [
          "childCategporyId",
          "description",
          "fullName",
          "price",
          "shortName",
          "sku",
          "thumbnailImage",
          "userId"
        ],
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "shortName": {
            "maxLength": 100,
            "minLength": 0,
            "type": "string"
          },
          "fullName": {
            "maxLength": 250,
            "minLength": 0,
            "type": "string"
          },
          "sku": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "thumbnailImage": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "maxLength": 1000,
            "minLength": 0,
            "type": "string"
          },
          "creratedDate": {
            "maxLength": 10,
            "minLength": 0,
            "type": "string",
            "nullable": true
          },
          "childCategporyId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      }
    }
  }
}