var jsonData = {
  "openapi": "3.0.1",
  "info": {
    "title": "FreeProjectApi",
    "version": "1.0"
  },
  "paths": {
    "/api/BankLoan/getAllUsers": {
      "get": {
        "tags": [
          "BankLoan"
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
    "/api/BankLoan/getUserById/{id}": {
      "get": {
        "tags": [
          "BankLoan"
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
    "/api/BankLoan/register": {
      "post": {
        "tags": [
          "BankLoan"
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
    "/api/BankLoan/login": {
      "post": {
        "tags": [
          "BankLoan"
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
    "/api/BankLoan/updateUser/{id}": {
      "put": {
        "tags": [
          "BankLoan"
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
    "/api/BankLoan/deleteUserById/{id}": {
      "delete": {
        "tags": [
          "BankLoan"
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
    "/api/BudgetPlanner/getAllQuery": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BudgetPlanner/addQuery": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/miniProjectQuery"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/miniProjectQuery"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/miniProjectQuery"
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
    "/api/BudgetPlanner/deleteQuery": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BudgetPlanner/GetAllTransactionType": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BudgetPlanner/GetDashboardData": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
            "name": "fromDate",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "toDate",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          }
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
    "/api/BudgetPlanner/GetCategoryWiseExpense": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
            "name": "fromDate",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "toDate",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          }
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
    "/api/BudgetPlanner/GetMonthWiseCategoryExpense": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
            "name": "year",
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
    "/api/BudgetPlanner/GetAllUsers": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BudgetPlanner/login": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/BudgetPlanner/AddNewUser": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/BudgetPlanner/UpdateUser": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/BudgetPlanner/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BudgetPlanner/GetCategoryByUserId": {
      "get": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BudgetPlanner/AddNewCategory": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetCategory"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetCategory"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetCategory"
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
    "/api/BudgetPlanner/UpdateCategory": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetCategory"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetCategory"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetCategory"
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
    "/api/BudgetPlanner/DeleteCategoryByCategoryId": {
      "delete": {
        "tags": [
          "BudgetPlanner"
        ],
        "parameters": [
          {
            "name": "categoryId",
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
    "/api/BudgetPlanner/GetTranscationByTypeId": {
      "get": {
        "tags": [
          "BudgetPlanner"
        ],
        "parameters": [
          {
            "name": "transactionTypeId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
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
    "/api/BudgetPlanner/AddNewTransaction": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetTransaction"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetTransaction"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetTransaction"
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
    "/api/BudgetPlanner/UpdateTransaction": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetTransaction"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetTransaction"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BudgetTransaction"
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
    "/api/BudgetPlanner/DeleteTransactionByTransactionId": {
      "delete": {
        "tags": [
          "BudgetPlanner"
        ],
        "parameters": [
          {
            "name": "transactionId",
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
    "/api/BudgetPlanner/getAllVideos": {
      "get": {
        "tags": [
          "BudgetPlanner"
        ],
        "parameters": [
          {
            "name": "title",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "videoType",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
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
    "/api/BudgetPlanner/AddNewvideo": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeVideo"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeVideo"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeVideo"
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
    "/api/BudgetPlanner/updateVideo": {
      "post": {
        "tags": [
          "BudgetPlanner"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeVideo"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeVideo"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeVideo"
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
    "/api/BudgetPlanner/deletVideo": {
      "delete": {
        "tags": [
          "BudgetPlanner"
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
    "/api/BusBooking/GetAllUsers1": {
      "get": {
        "tags": [
          "BusBooking"
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
    "/api/BusBooking/GetAllUsers": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/BusBooking/login": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/BusBooking/AddNewUser": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/BusBooking/CreateVendor": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/BusBooking/UpdateUser": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/BusBooking/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "BusBooking"
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
    "/api/BusBooking/GetBusVendors": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusVendor"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusVendor"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusVendor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/GetBusVendorsById": {
      "get": {
        "tags": [
          "BusBooking"
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
                  "$ref": "#/components/schemas/BusVendor"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusVendor"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusVendor"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/PutBusVendors": {
      "put": {
        "tags": [
          "BusBooking"
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
                "$ref": "#/components/schemas/BusVendor"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusVendor"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusVendor"
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
    "/api/BusBooking/PostBusVendor": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BusVendor"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusVendor"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusVendor"
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
                  "$ref": "#/components/schemas/BusVendor"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusVendor"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusVendor"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/DeleteBusVendor": {
      "delete": {
        "tags": [
          "BusBooking"
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
    "/api/BusBooking/GetBusLocations": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusLocation"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusLocation"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusLocation"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/GetBusLocationById": {
      "get": {
        "tags": [
          "BusBooking"
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
                  "$ref": "#/components/schemas/BusLocation"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusLocation"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusLocation"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/getAddressByLocationId": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "parameters": [
          {
            "name": "locationid",
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
                    "$ref": "#/components/schemas/BusAddressLocation"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusAddressLocation"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusAddressLocation"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/PostBusLocationAddress": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BusAddressLocation"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusAddressLocation"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusAddressLocation"
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
                  "$ref": "#/components/schemas/BusAddressLocation"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusAddressLocation"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusAddressLocation"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/PutBusLocation": {
      "put": {
        "tags": [
          "BusBooking"
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
                "$ref": "#/components/schemas/BusLocation"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusLocation"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusLocation"
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
    "/api/BusBooking/PostBusLocation": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BusLocation"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusLocation"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusLocation"
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
                  "$ref": "#/components/schemas/BusLocation"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusLocation"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusLocation"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/DeleteBusLocation": {
      "delete": {
        "tags": [
          "BusBooking"
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
    "/api/BusBooking/GetBusSchedules": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "parameters": [
          {
            "name": "vendorId",
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
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/searchBus": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "parameters": [
          {
            "name": "fromLocation",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "toLocation",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "travelDate",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
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
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/getBookedSeats": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "parameters": [
          {
            "name": "shceduleId",
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
                    "type": "integer",
                    "format": "int32"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "format": "int32"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "format": "int32"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/searchBus2": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "parameters": [
          {
            "name": "fromLocation",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "toLocation",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "travelDate",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
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
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusScheduleDetails"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/GetBusScheduleById": {
      "get": {
        "tags": [
          "BusBooking"
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
                  "$ref": "#/components/schemas/BusSchedule"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusSchedule"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusSchedule"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/PutBusSchedule": {
      "put": {
        "tags": [
          "BusBooking"
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
                "$ref": "#/components/schemas/BusSchedule"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusSchedule"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusSchedule"
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
    "/api/BusBooking/PostBusSchedule": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BusSchedule"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusSchedule"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusSchedule"
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
                  "$ref": "#/components/schemas/BusSchedule"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusSchedule"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusSchedule"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/DeleteBusSchedule": {
      "delete": {
        "tags": [
          "BusBooking"
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
    "/api/BusBooking/GetAllBusBookings": {
      "get": {
        "tags": [
          "BusBooking"
        ],
        "parameters": [
          {
            "name": "vendorId",
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
                    "$ref": "#/components/schemas/BusBookingList"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusBookingList"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/BusBookingList"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/GetBusBooking": {
      "get": {
        "tags": [
          "BusBooking"
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
                  "$ref": "#/components/schemas/BusBooking"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusBooking"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusBooking"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/PostBusBooking": {
      "post": {
        "tags": [
          "BusBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BusBookingViewModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/BusBookingViewModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/BusBookingViewModel"
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
                  "$ref": "#/components/schemas/BusBooking"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusBooking"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/BusBooking"
                }
              }
            }
          }
        }
      }
    },
    "/api/BusBooking/DeleteBusBooking": {
      "delete": {
        "tags": [
          "BusBooking"
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
    "/api/CollegeProject/GetAllUsers": {
      "get": {
        "tags": [
          "CollegeProject"
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
    "/api/CollegeProject/login": {
      "post": {
        "tags": [
          "CollegeProject"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/CollegeProject/AddNewUser": {
      "post": {
        "tags": [
          "CollegeProject"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/CollegeProject/getAllProjects": {
      "get": {
        "tags": [
          "CollegeProject"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/CollegeProject/getProjectByStatus": {
      "get": {
        "tags": [
          "CollegeProject"
        ],
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "schema": {
              "type": "string"
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
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/CollegeProject/getProjectByUser": {
      "get": {
        "tags": [
          "CollegeProject"
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
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProjectSubmission"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/CollegeProject/getDashboard": {
      "get": {
        "tags": [
          "CollegeProject"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectDashboard"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectDashboard"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectDashboard"
                }
              }
            }
          }
        }
      }
    },
    "/api/CollegeProject/{id}": {
      "get": {
        "tags": [
          "CollegeProject"
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
                  "$ref": "#/components/schemas/ProjectSubmission"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectSubmission"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectSubmission"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "CollegeProject"
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
                "$ref": "#/components/schemas/ProjectSubmission"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ProjectSubmission"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ProjectSubmission"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "delete": {
        "tags": [
          "CollegeProject"
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
    "/api/CollegeProject/SubmitProject": {
      "post": {
        "tags": [
          "CollegeProject"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ProjectSubmission"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ProjectSubmission"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ProjectSubmission"
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
                  "$ref": "#/components/schemas/ProjectSubmission"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectSubmission"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProjectSubmission"
                }
              }
            }
          }
        }
      }
    },
    "/api/Complaint/GetAdminDashboard": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/GetUserDashboard": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/GetComplaintStatus": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/GetAllUsers": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/login": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/Complaint/AddNewUser": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/Complaint/UpdateUser": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/Complaint/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/GetParentDepartment": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/AddNewDepartment": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
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
    "/api/Complaint/AddBulkDepartment": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ComplaintDepartment"
                }
              }
            },
            "text/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ComplaintDepartment"
                }
              }
            },
            "application/*+json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ComplaintDepartment"
                }
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
    "/api/Complaint/UpdateDepartment": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
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
    "/api/Complaint/DeletedepartmentBydepartmentId": {
      "delete": {
        "tags": [
          "Complaint"
        ],
        "parameters": [
          {
            "name": "departmentId",
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
    "/api/Complaint/GetAllChildDepartment": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/GetChildDepartmentByParentId": {
      "get": {
        "tags": [
          "Complaint"
        ],
        "parameters": [
          {
            "name": "deptId",
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
    "/api/Complaint/AddChildDepartment": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
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
    "/api/Complaint/UpdateChildDepartment": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
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
    "/api/Complaint/DeleteChildDeptById": {
      "delete": {
        "tags": [
          "Complaint"
        ],
        "parameters": [
          {
            "name": "childDeptId",
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
    "/api/Complaint/getAllComplaints": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/getComplaintsCreatedByUserId": {
      "get": {
        "tags": [
          "Complaint"
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
    "/api/Complaint/getComplaintReceivedByDeptId": {
      "get": {
        "tags": [
          "Complaint"
        ],
        "parameters": [
          {
            "name": "childDeptId",
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
    "/api/Complaint/CreateNewComplaint": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintMaster"
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
    "/api/Complaint/UpdateComplaint": {
      "post": {
        "tags": [
          "Complaint"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintMaster"
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
    "/api/Complaint/DeleteComplaintById": {
      "delete": {
        "tags": [
          "Complaint"
        ],
        "parameters": [
          {
            "name": "complaintId",
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
    "/api/DocTracker/getAllDocuments": {
      "get": {
        "tags": [
          "DocTracker"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/DocTracker/getDocumentById/{id}": {
      "get": {
        "tags": [
          "DocTracker"
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
    "/api/DocTracker/createDocument": {
      "post": {
        "tags": [
          "DocTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDocument"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDocument"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDocument"
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
    "/api/DocTracker/updateDocument/{id}": {
      "put": {
        "tags": [
          "DocTracker"
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
                "$ref": "#/components/schemas/DocTrackerDocument"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDocument"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDocument"
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
    "/api/DocTracker/deleteDocument/{id}": {
      "delete": {
        "tags": [
          "DocTracker"
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
    "/api/DocTracker/getAllDepartments": {
      "get": {
        "tags": [
          "DocTracker"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/DocTracker/getDepartmentById/{id}": {
      "get": {
        "tags": [
          "DocTracker"
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
    "/api/DocTracker/createDepartment": {
      "post": {
        "tags": [
          "DocTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDepartment"
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
    "/api/DocTracker/updateDepartment/{id}": {
      "put": {
        "tags": [
          "DocTracker"
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
                "$ref": "#/components/schemas/DocTrackerDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerDepartment"
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
    "/api/DocTracker/deleteDepartment/{id}": {
      "delete": {
        "tags": [
          "DocTracker"
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
    "/api/DocTracker/getAllApplications": {
      "get": {
        "tags": [
          "DocTracker"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/DocTracker/getApplicationById/{id}": {
      "get": {
        "tags": [
          "DocTracker"
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
    "/api/DocTracker/createApplication": {
      "post": {
        "tags": [
          "DocTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerApplication"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerApplication"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerApplication"
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
    "/api/DocTracker/updateApplication/{id}": {
      "put": {
        "tags": [
          "DocTracker"
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
                "$ref": "#/components/schemas/DocTrackerApplication"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerApplication"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DocTrackerApplication"
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
    "/api/DocTracker/deleteApplication/{id}": {
      "delete": {
        "tags": [
          "DocTracker"
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
    "/api/EmployeeManagement/GetDashboard": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ErmDashboard"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErmDashboard"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErmDashboard"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/GetParentDepartment": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/AddNewDepartment": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
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
    "/api/EmployeeManagement/AddBulkDepartment": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ComplaintDepartment"
                }
              }
            },
            "text/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ComplaintDepartment"
                }
              }
            },
            "application/*+json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ComplaintDepartment"
                }
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
    "/api/EmployeeManagement/UpdateDepartment": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintDepartment"
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
    "/api/EmployeeManagement/DeletedepartmentBydepartmentId": {
      "delete": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "departmentId",
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
    "/api/EmployeeManagement/GetAllChildDepartment": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetChildDepartmentByParentId": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "deptId",
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
    "/api/EmployeeManagement/AddChildDepartment": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
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
    "/api/EmployeeManagement/UpdateChildDepartment": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplaintChildDepartment"
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
    "/api/EmployeeManagement/DeleteChildDeptById": {
      "delete": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "childDeptId",
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
    "/api/EmployeeManagement/GetAllEmployees": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpEmployees"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpEmployees"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpEmployees"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/GetEmployee/{id}": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
                  "$ref": "#/components/schemas/ErpEmployees"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpEmployees"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpEmployees"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/CreateEmployee": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpEmployees"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpEmployees"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ErpEmployees"
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
                  "$ref": "#/components/schemas/ErpEmployees"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpEmployees"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpEmployees"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/login": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/EmployeeManagement/UpdateEmployee/{id}": {
      "put": {
        "tags": [
          "EmployeeManagement"
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
                "$ref": "#/components/schemas/ErpEmployees"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpEmployees"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ErpEmployees"
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
    "/api/EmployeeManagement/DeleteEmployee/{id}": {
      "delete": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetAllProjectEmployees": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpProjectEmployeeList"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpProjectEmployeeList"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpProjectEmployeeList"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/GetProjectEmployee/{id}": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
                  "$ref": "#/components/schemas/ErpProjectEmployee"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjectEmployee"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjectEmployee"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/CreateProjectEmployee": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjectEmployee"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjectEmployee"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjectEmployee"
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
                  "$ref": "#/components/schemas/ErpProjectEmployee"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjectEmployee"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjectEmployee"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/UpdateProjectEmployee/{id}": {
      "put": {
        "tags": [
          "EmployeeManagement"
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
                "$ref": "#/components/schemas/ErpProjectEmployee"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjectEmployee"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjectEmployee"
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
    "/api/EmployeeManagement/DeleteProjectEmployee/{id}": {
      "delete": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetAllProjects": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpProjectsList"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpProjectsList"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ErpProjectsList"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/GetProject/{id}": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
                  "$ref": "#/components/schemas/ErpProjects"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjects"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjects"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/CreateProject": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjects"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjects"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjects"
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
                  "$ref": "#/components/schemas/ErpProjects"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjects"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErpProjects"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/UpdateProject/{id}": {
      "put": {
        "tags": [
          "EmployeeManagement"
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
                "$ref": "#/components/schemas/ErpProjects"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjects"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ErpProjects"
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
    "/api/EmployeeManagement/DeleteProject/{id}": {
      "delete": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetHRDashboard": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ErmLeaveDashboard"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErmLeaveDashboard"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErmLeaveDashboard"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/GetEmpployeeLeaveDashboard": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
                  "$ref": "#/components/schemas/ErmEmpLeaveDashboard"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErmEmpLeaveDashboard"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErmEmpLeaveDashboard"
                }
              }
            }
          }
        }
      }
    },
    "/api/EmployeeManagement/GetLeaveTypes": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/AddNewLeaveType": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LeaveTypeMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LeaveTypeMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LeaveTypeMaster"
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
    "/api/EmployeeManagement/GetAllEarnedLeaves": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetEarnedLeavesByEmpId": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/AddNewEarnedLeave": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/earnedLeaves"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/earnedLeaves"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/earnedLeaves"
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
    "/api/EmployeeManagement/DeleteEarnedLeave": {
      "delete": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "earnedLeaveId",
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
    "/api/EmployeeManagement/GetAllLeaveRequest": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetAllLeaveRequestByEmpId": {
      "get": {
        "tags": [
          "EmployeeManagement"
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
    "/api/EmployeeManagement/GetLeavesByStatus": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
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
    "/api/EmployeeManagement/CreateNewLeaveRequest": {
      "post": {
        "tags": [
          "EmployeeManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/employeeLeaves"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/employeeLeaves"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/employeeLeaves"
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
    "/api/EmployeeManagement/ChangeLeaveStatus": {
      "get": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "leaveId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "status",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
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
    "/api/EmployeeManagement/DeleteLeaveRequestId": {
      "delete": {
        "tags": [
          "EmployeeManagement"
        ],
        "parameters": [
          {
            "name": "leaveId",
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
    "/api/FreelancerJobs/GetAllUsers": {
      "get": {
        "tags": [
          "FreelancerJobs"
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
    "/api/FreelancerJobs/login": {
      "post": {
        "tags": [
          "FreelancerJobs"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/FreelancerJobs/Register": {
      "post": {
        "tags": [
          "FreelancerJobs"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModel"
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
    "/api/FreelancerJobs/UpdateUser": {
      "post": {
        "tags": [
          "FreelancerJobs"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/FreelancerJobs/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "FreelancerJobs"
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
    "/api/FreelancerJobs/GetAllJobs": {
      "get": {
        "tags": [
          "FreelancerJobs"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkProject"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkProject"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkProject"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/GetProjectsCreatedByUserId": {
      "get": {
        "tags": [
          "FreelancerJobs"
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
                    "$ref": "#/components/schemas/UpworkProject"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkProject"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkProject"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/GetJobById": {
      "get": {
        "tags": [
          "FreelancerJobs"
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
                  "$ref": "#/components/schemas/UpworkProject"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpworkProject"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpworkProject"
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/CreateNewProjectJob": {
      "post": {
        "tags": [
          "FreelancerJobs"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkProject"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkProject"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkProject"
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
                  "$ref": "#/components/schemas/UpworkProject"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpworkProject"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpworkProject"
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/UpdateProjectJob": {
      "put": {
        "tags": [
          "FreelancerJobs"
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
                "$ref": "#/components/schemas/UpworkProject"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkProject"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkProject"
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
    "/api/FreelancerJobs/DeleteProjectJobById": {
      "delete": {
        "tags": [
          "FreelancerJobs"
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
    "/api/FreelancerJobs/getAllBids": {
      "get": {
        "tags": [
          "FreelancerJobs"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/getBidsReceivedByProjectId": {
      "get": {
        "tags": [
          "FreelancerJobs"
        ],
        "parameters": [
          {
            "name": "projectId",
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
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/getMySubmitedBids": {
      "get": {
        "tags": [
          "FreelancerJobs"
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
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UpworkBid"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/bids": {
      "post": {
        "tags": [
          "FreelancerJobs"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkBid"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkBid"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkBid"
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
                  "$ref": "#/components/schemas/UpworkBid"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpworkBid"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpworkBid"
                }
              }
            }
          }
        }
      }
    },
    "/api/FreelancerJobs/UpdateBid": {
      "put": {
        "tags": [
          "FreelancerJobs"
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
                "$ref": "#/components/schemas/UpworkBid"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkBid"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UpworkBid"
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
    "/api/FreelancerJobs/DeleteBid": {
      "delete": {
        "tags": [
          "FreelancerJobs"
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
    "/api/GoalTracker/getAllGoals": {
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
    },
    "/api/IncidentTracking/GetAllUsers": {
      "get": {
        "tags": [
          "IncidentTracking"
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
    "/api/IncidentTracking/login": {
      "post": {
        "tags": [
          "IncidentTracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/IncidentTracking/Register": {
      "post": {
        "tags": [
          "IncidentTracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModelInce"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModelInce"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModelInce"
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
    "/api/IncidentTracking/UpdateUser": {
      "post": {
        "tags": [
          "IncidentTracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/IncidentTracking/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "IncidentTracking"
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
    "/api/IncidentTracking/dashboardSummary": {
      "get": {
        "tags": [
          "IncidentTracking"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/IncidentTracking/searchIncidents": {
      "get": {
        "tags": [
          "IncidentTracking"
        ],
        "parameters": [
          {
            "name": "title",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "priority",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "schema": {
              "type": "string"
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
    "/api/IncidentTracking/getAllIncidents": {
      "get": {
        "tags": [
          "IncidentTracking"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/IncidentTracking/getIncidentAssigntoUser": {
      "get": {
        "tags": [
          "IncidentTracking"
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
    "/api/IncidentTracking/getIncidentCreatedByUser": {
      "get": {
        "tags": [
          "IncidentTracking"
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
    "/api/IncidentTracking/getIncident/{id}": {
      "get": {
        "tags": [
          "IncidentTracking"
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
    "/api/IncidentTracking/createIncident": {
      "post": {
        "tags": [
          "IncidentTracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Incident"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Incident"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Incident"
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
    "/api/IncidentTracking/updateIncident/{id}": {
      "put": {
        "tags": [
          "IncidentTracking"
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
                "$ref": "#/components/schemas/Incident"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Incident"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Incident"
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
    "/api/IncidentTracking/deleteIncident/{id}": {
      "delete": {
        "tags": [
          "IncidentTracking"
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
    "/api/IncidentTracking/getComments/{incidentId}": {
      "get": {
        "tags": [
          "IncidentTracking"
        ],
        "parameters": [
          {
            "name": "incidentId",
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
    "/api/IncidentTracking/createComment": {
      "post": {
        "tags": [
          "IncidentTracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IncidentsComment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/IncidentsComment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/IncidentsComment"
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
    "/api/IncidentTracking/deleteComment/{id}": {
      "delete": {
        "tags": [
          "IncidentTracking"
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
    "/api/InstituteManagement/GetDashboardData": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/InstituteManagement/CreateStudent": {
      "post": {
        "tags": [
          "InstituteManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Student"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Student"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Student"
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
    "/api/InstituteManagement/GetStudents": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/InstituteManagement/student/GetStudentBatchesWithFees/{studid}": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "parameters": [
          {
            "name": "studid",
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
    "/api/InstituteManagement/GetStudentById": {
      "get": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/UpdateStudent": {
      "put": {
        "tags": [
          "InstituteManagement"
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
                "$ref": "#/components/schemas/Student"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Student"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Student"
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
    "/api/InstituteManagement/DeleteStudentById": {
      "delete": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/CreateBatch": {
      "post": {
        "tags": [
          "InstituteManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Batch"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Batch"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Batch"
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
    "/api/InstituteManagement/GetBatches": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/InstituteManagement/GetBatchById": {
      "get": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/GetBatchDetailsWithStudentsAndFees/{batchId}": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "parameters": [
          {
            "name": "batchId",
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
    "/api/InstituteManagement/UpdateBatch": {
      "put": {
        "tags": [
          "InstituteManagement"
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
                "$ref": "#/components/schemas/Batch"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Batch"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Batch"
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
    "/api/InstituteManagement/DeleteBatchById": {
      "delete": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/CreateEnrollment": {
      "post": {
        "tags": [
          "InstituteManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Enrollment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Enrollment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Enrollment"
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
    "/api/InstituteManagement/GetEnrollments": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/InstituteManagement/GetEnrollmentById": {
      "get": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/UpdateEnrollment": {
      "put": {
        "tags": [
          "InstituteManagement"
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
                "$ref": "#/components/schemas/Enrollment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Enrollment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Enrollment"
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
    "/api/InstituteManagement/DeleteEnrollmentById": {
      "delete": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/CreateFee": {
      "post": {
        "tags": [
          "InstituteManagement"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Fee"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Fee"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Fee"
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
    "/api/InstituteManagement/GetFees": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/InstituteManagement/GetFeepaymentId/{id}": {
      "get": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/GetFeeDetailsByEnrollID/{EnrollID}": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "parameters": [
          {
            "name": "EnrollID",
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
    "/api/InstituteManagement/UpdateFee": {
      "put": {
        "tags": [
          "InstituteManagement"
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
                "$ref": "#/components/schemas/Fee"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/Fee"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/Fee"
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
    "/api/InstituteManagement/DeleteFee": {
      "delete": {
        "tags": [
          "InstituteManagement"
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
    "/api/InstituteManagement/GetPendingFees": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/InstituteManagement/GetPaymentsByBatchAndStudent": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "parameters": [
          {
            "name": "batchId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "studentId",
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
    "/api/InstituteManagement/GetStudentsByBatchId/{batchId}": {
      "get": {
        "tags": [
          "InstituteManagement"
        ],
        "parameters": [
          {
            "name": "batchId",
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
    "/api/Insurance/GetAllCustomersWithPlans": {
      "get": {
        "tags": [
          "Insurance"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": { }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": { }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": { }
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/GetAllPlans": {
      "get": {
        "tags": [
          "Insurance"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsurancePlanMaster"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsurancePlanMaster"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsurancePlanMaster"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/FilterPlans": {
      "get": {
        "tags": [
          "Insurance"
        ],
        "parameters": [
          {
            "name": "minSumAssured",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "maxMonthlyPremium",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "maxCoverageAge",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "minCoverageAge",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "isMedicalNeeded",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "vendorId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "isCibilCheck",
            "in": "query",
            "schema": {
              "type": "boolean"
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
                    "$ref": "#/components/schemas/InsurancePlanMaster"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsurancePlanMaster"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsurancePlanMaster"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/GetCustomerById/{id}": {
      "get": {
        "tags": [
          "Insurance"
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
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/AddPlan": {
      "post": {
        "tags": [
          "Insurance"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InsurancePlanMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/InsurancePlanMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/InsurancePlanMaster"
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
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/AddCustomer": {
      "post": {
        "tags": [
          "Insurance"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCustomers"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCustomers"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCustomers"
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
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCustomers"
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/UpdateCustomer/{id}": {
      "put": {
        "tags": [
          "Insurance"
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
                "$ref": "#/components/schemas/InsuranceCustomers"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCustomers"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCustomers"
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
    "/api/Insurance/DeleteCustomer/{id}": {
      "delete": {
        "tags": [
          "Insurance"
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
    "/api/Insurance/GetAllVendors": {
      "get": {
        "tags": [
          "Insurance"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceVendors"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceVendors"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceVendors"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/AddVendor": {
      "post": {
        "tags": [
          "Insurance"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceVendors"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceVendors"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceVendors"
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
                  "$ref": "#/components/schemas/InsuranceVendors"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceVendors"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceVendors"
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/GetAllInsuranceTypes": {
      "get": {
        "tags": [
          "Insurance"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceTypeMaster"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceTypeMaster"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceTypeMaster"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/AddInsuranceType": {
      "post": {
        "tags": [
          "Insurance"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceTypeMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceTypeMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceTypeMaster"
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
                  "$ref": "#/components/schemas/InsuranceCategoryMaster"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCategoryMaster"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCategoryMaster"
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/GetAllCategories": {
      "get": {
        "tags": [
          "Insurance"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceCategoryMaster"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceCategoryMaster"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/InsuranceCategoryMaster"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Insurance/AddCategory": {
      "post": {
        "tags": [
          "Insurance"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCategoryMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCategoryMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/InsuranceCategoryMaster"
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
                  "$ref": "#/components/schemas/InsuranceCategoryMaster"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCategoryMaster"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/InsuranceCategoryMaster"
                }
              }
            }
          }
        }
      }
    },
    "/api/Loan/GetAllApplications": {
      "get": {
        "tags": [
          "Loan"
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
    "/api/Loan/CheckApplicationStatus": {
      "get": {
        "tags": [
          "Loan"
        ],
        "parameters": [
          {
            "name": "panNo",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
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
    "/api/Loan/AddNewApplication": {
      "post": {
        "tags": [
          "Loan"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplicantLoanView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplicantLoanView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ApplicantLoanView"
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
    "/api/OnlineLearning/GetAllUsers": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/login": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/OnlineLearning/AddNewUser": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/OnlineLearning/UpdateUser": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/OnlineLearning/GetAllVideos": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/AddNewVideo": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsVideos"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsVideos"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsVideos"
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
    "/api/OnlineLearning/UpdateVideo": {
      "put": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsVideos"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsVideos"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsVideos"
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
    "/api/OnlineLearning/DeleteVideo": {
      "delete": {
        "tags": [
          "OnlineLearning"
        ],
        "parameters": [
          {
            "name": "videoId",
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
    "/api/OnlineLearning/GetAllCourse": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/AddNewCourse": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMaster"
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
    "/api/OnlineLearning/UpdateCourse": {
      "put": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMaster"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMaster"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMaster"
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
    "/api/OnlineLearning/AddCourseWithVideos": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMasterView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMasterView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMasterView"
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
    "/api/OnlineLearning/UpdateCourseWithVideos": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMasterView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMasterView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseMasterView"
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
    "/api/OnlineLearning/DeleteCourseById": {
      "delete": {
        "tags": [
          "OnlineLearning"
        ],
        "parameters": [
          {
            "name": "courseId",
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
    "/api/OnlineLearning/GetAllCourseVideos": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/GetCourseVideosbyCourseId": {
      "get": {
        "tags": [
          "OnlineLearning"
        ],
        "parameters": [
          {
            "name": "courseId",
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
    "/api/OnlineLearning/AddNewCourseVideo": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseVideos"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseVideos"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseVideos"
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
    "/api/OnlineLearning/DeleteVideoFromCourse": {
      "delete": {
        "tags": [
          "OnlineLearning"
        ],
        "parameters": [
          {
            "name": "courseVideoId",
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
    "/api/OnlineLearning/GetAllEnrollments": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/GetEnrolledCourseByUserId": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/CreateNewEnrollment": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsEnrollment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsEnrollment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsEnrollment"
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
    "/api/OnlineLearning/UpdateEnrollment": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/OnlineLearning/DeleteEnrollment": {
      "delete": {
        "tags": [
          "OnlineLearning"
        ],
        "parameters": [
          {
            "name": "enrollmentId",
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
    "/api/OnlineLearning/GetAllEnrollmentsProgress": {
      "get": {
        "tags": [
          "OnlineLearning"
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
    "/api/OnlineLearning/GetProgressByEnrollmentId": {
      "get": {
        "tags": [
          "OnlineLearning"
        ],
        "parameters": [
          {
            "name": "enrollmentId",
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
    "/api/OnlineLearning/addStartProgress": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseProgress"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseProgress"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseProgress"
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
    "/api/OnlineLearning/addCompleteProgress": {
      "post": {
        "tags": [
          "OnlineLearning"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseProgress"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseProgress"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/lmsCourseProgress"
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
    "/api/Products": {
      "get": {
        "tags": [
          "Products"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "category",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "shortName",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pageNumber",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "pageSize",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "sortBy",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "schema": {
              "type": "string"
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
                    "$ref": "#/components/schemas/EcomProduct"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/EcomProduct"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/EcomProduct"
                  }
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Products"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EcomProduct"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/EcomProduct"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/EcomProduct"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "tags": [
          "Products"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EcomProduct"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/EcomProduct"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/EcomProduct"
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
                  "$ref": "#/components/schemas/EcomProduct"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcomProduct"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcomProduct"
                }
              }
            }
          }
        }
      }
    },
    "/api/Products/getTotalProduct": {
      "get": {
        "tags": [
          "Products"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              }
            }
          }
        }
      }
    },
    "/api/Products/getSingleProduct": {
      "get": {
        "tags": [
          "Products"
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
                  "$ref": "#/components/schemas/EcomProduct"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcomProduct"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/EcomProduct"
                }
              }
            }
          }
        }
      }
    },
    "/api/Products/deleteProduct": {
      "delete": {
        "tags": [
          "Products"
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
    "/api/PropertyBookingController/GetAllCustomer": {
      "get": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/AddCustomer": {
      "post": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyCustomers"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyCustomers"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyCustomers"
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
    "/api/PropertyBookingController/UpdateCustomer": {
      "put": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyCustomers"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyCustomers"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyCustomers"
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
    "/api/PropertyBookingController/DeleteCustomerById": {
      "delete": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/GetCustomerById": {
      "get": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/GetAllPropertyType": {
      "get": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/AddPropertyType": {
      "post": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/propertyTypes"
                }
              }
            },
            "text/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/propertyTypes"
                }
              }
            },
            "application/*+json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/propertyTypes"
                }
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
    "/api/PropertyBookingController/UpdatePropertyType": {
      "put": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyTypes"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyTypes"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyTypes"
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
    "/api/PropertyBookingController/DeletePropertyTypeById": {
      "delete": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/GetAllPropertyBySiteId": {
      "get": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "siteid",
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
    "/api/PropertyBookingController/GetAllPropertyMasters": {
      "get": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/AddPropertyMasters": {
      "post": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyMasters"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyMasters"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyMasters"
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
    "/api/PropertyBookingController/UpdatePropertyMasters": {
      "put": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyMasters"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyMasters"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyMasters"
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
    "/api/PropertyBookingController/DeletePropertyMasterById": {
      "delete": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "propertyId",
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
    "/api/PropertyBookingController/GetAllSites": {
      "get": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/AddSites": {
      "post": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/siteMasters"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/siteMasters"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/siteMasters"
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
    "/api/PropertyBookingController/UpdateSites": {
      "put": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/siteMasters"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/siteMasters"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/siteMasters"
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
    "/api/PropertyBookingController/DeleteSitesById": {
      "delete": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/getSiteDetails": {
      "get": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "siteId",
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
    "/api/PropertyBookingController/GetAllPropertyBooking": {
      "get": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/GetAllPropertyBookingBySiteId": {
      "get": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "siteid",
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
    "/api/PropertyBookingController/AddPropertyBooking": {
      "post": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyBookingsView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyBookingsView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyBookingsView"
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
    "/api/PropertyBookingController/UpdatePropertyBooking": {
      "put": {
        "tags": [
          "PropertyBooking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyBookings"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/propertyBookings"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/propertyBookings"
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
    "/api/PropertyBookingController/DeletePropertyBookingById": {
      "delete": {
        "tags": [
          "PropertyBooking"
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
    "/api/PropertyBookingController/GetBookingByBookingId": {
      "get": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "bookingId",
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
    "/api/PropertyBookingController/GetBookingByCustomerId": {
      "get": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "customerId",
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
    "/api/PropertyBookingController/GetBookingByPropertyId": {
      "get": {
        "tags": [
          "PropertyBooking"
        ],
        "parameters": [
          {
            "name": "propertyId",
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
    "/api/RealEstate/GetAllAgents": {
      "get": {
        "tags": [
          "RealEstate"
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
    "/api/RealEstate/GetAllCustomers": {
      "get": {
        "tags": [
          "RealEstate"
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
    "/api/RealEstate/login": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/RealEstate/AddNewAgent": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/RealEstate/AddNewCustomer": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/RealEstate/UpdateUser": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/RealEstate/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "RealEstate"
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
    "/api/RealEstate/GetAllProperty": {
      "get": {
        "tags": [
          "RealEstate"
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
    "/api/RealEstate/AddNewProperty": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PropertyView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PropertyView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PropertyView"
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
    "/api/RealEstate/UpdateProperty": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PropertyView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PropertyView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PropertyView"
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
    "/api/RealEstate/DeletePropertyId": {
      "delete": {
        "tags": [
          "RealEstate"
        ],
        "parameters": [
          {
            "name": "propertyId",
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
    "/api/RealEstate/GetEnquiryReceivedByAgentId": {
      "get": {
        "tags": [
          "RealEstate"
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
    "/api/RealEstate/GetEnquiryReceivedByPropertyId": {
      "get": {
        "tags": [
          "RealEstate"
        ],
        "parameters": [
          {
            "name": "propertyId",
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
    "/api/RealEstate/AddNewEnquiry": {
      "post": {
        "tags": [
          "RealEstate"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RealEnquiry"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RealEnquiry"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RealEnquiry"
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
    "/api/RfqTracker/GetAllVendor": {
      "get": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/GetAllCustomer": {
      "get": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/login": {
      "post": {
        "tags": [
          "RfqTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/RfqTracker/Register": {
      "post": {
        "tags": [
          "RfqTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModelInce"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModelInce"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModelInce"
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
    "/api/RfqTracker/UpdateUser": {
      "post": {
        "tags": [
          "RfqTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/RfqTracker/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/GetRFQs": {
      "get": {
        "tags": [
          "RfqTracker"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/RfqTracker/GetRFQByUserId": {
      "get": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/GetRFQById": {
      "get": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/CreateRFQ": {
      "post": {
        "tags": [
          "RfqTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQ"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQ"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RFQ"
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
    "/api/RfqTracker/UpdateRFQ": {
      "put": {
        "tags": [
          "RfqTracker"
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
                "$ref": "#/components/schemas/RFQ"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQ"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RFQ"
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
    "/api/RfqTracker/DeleteRFQ": {
      "delete": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/GetAllQuotes": {
      "get": {
        "tags": [
          "RfqTracker"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/RfqTracker/GetAllQuotesByQfqId": {
      "get": {
        "tags": [
          "RfqTracker"
        ],
        "parameters": [
          {
            "name": "rfqId",
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
    "/api/RfqTracker/GetAllQuotesAddedBySupplierId": {
      "get": {
        "tags": [
          "RfqTracker"
        ],
        "parameters": [
          {
            "name": "supplierid",
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
    "/api/RfqTracker/get-quote/{id}": {
      "get": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/create-quote": {
      "post": {
        "tags": [
          "RfqTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQQuote"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQQuote"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RFQQuote"
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
    "/api/RfqTracker/update-quote/{id}": {
      "put": {
        "tags": [
          "RfqTracker"
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
                "$ref": "#/components/schemas/RFQQuote"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQQuote"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RFQQuote"
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
    "/api/RfqTracker/delete-quote/{id}": {
      "delete": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/GetContractsByManufacturerId": {
      "get": {
        "tags": [
          "RfqTracker"
        ],
        "parameters": [
          {
            "name": "manufacturerId",
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
    "/api/RfqTracker/GetContractsReceivedBysupplierId": {
      "get": {
        "tags": [
          "RfqTracker"
        ],
        "parameters": [
          {
            "name": "supplierId",
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
    "/api/RfqTracker/get-contract/{id}": {
      "get": {
        "tags": [
          "RfqTracker"
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
    "/api/RfqTracker/create-contract": {
      "post": {
        "tags": [
          "RfqTracker"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQContract"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQContract"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RFQContract"
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
    "/api/RfqTracker/update-contract/{id}": {
      "put": {
        "tags": [
          "RfqTracker"
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
                "$ref": "#/components/schemas/RFQContract"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RFQContract"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RFQContract"
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
    "/api/RfqTracker/delete-contract/{id}": {
      "delete": {
        "tags": [
          "RfqTracker"
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
    "/api/SoilTest/GetAllUsers": {
      "get": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/login": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/SoilTest/AddNewUser": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserViewModel"
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
    "/api/SoilTest/UpdateUser": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/SoilTest/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/GetSites": {
      "get": {
        "tags": [
          "SoilTest"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/SoilTest/GetSiteById": {
      "get": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/CreateNewSites": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FddSite"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/FddSite"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/FddSite"
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
    "/api/SoilTest/UpdateSite": {
      "put": {
        "tags": [
          "SoilTest"
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
                "$ref": "#/components/schemas/FddSite"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/FddSite"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/FddSite"
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
    "/api/SoilTest/DeleteSite": {
      "delete": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/GetAllTestTypes": {
      "get": {
        "tags": [
          "SoilTest"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/SoilTest/GetTestTypeById": {
      "get": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/CreateTestTypes": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/FddTestType"
                }
              }
            },
            "text/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/FddTestType"
                }
              }
            },
            "application/*+json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/FddTestType"
                }
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
    "/api/SoilTest/UpdateTestTypes": {
      "put": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/FddTestType"
                }
              }
            },
            "text/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/FddTestType"
                }
              }
            },
            "application/*+json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/FddTestType"
                }
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
    "/api/SoilTest/DeleteTestType": {
      "delete": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/GetAllTests": {
      "get": {
        "tags": [
          "SoilTest"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/SoilTest/GetAllTestsBySiteId": {
      "get": {
        "tags": [
          "SoilTest"
        ],
        "parameters": [
          {
            "name": "siteId",
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
    "/api/SoilTest/GetTestById": {
      "get": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/CreateTest": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FddTest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/FddTest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/FddTest"
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
    "/api/SoilTest/UpdateTest": {
      "put": {
        "tags": [
          "SoilTest"
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
                "$ref": "#/components/schemas/FddTest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/FddTest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/FddTest"
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
    "/api/SoilTest/DeleteTest": {
      "delete": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/GetAllMeasurements": {
      "get": {
        "tags": [
          "SoilTest"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/SoilTest/GetAllMeasurementsByTestId": {
      "get": {
        "tags": [
          "SoilTest"
        ],
        "parameters": [
          {
            "name": "testid",
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
    "/api/SoilTest/GetMeasurementById": {
      "get": {
        "tags": [
          "SoilTest"
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
    "/api/SoilTest/CreateMeasurement": {
      "post": {
        "tags": [
          "SoilTest"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FddMeasurement"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/FddMeasurement"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/FddMeasurement"
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
    "/api/SoilTest/UpdateMeasurement": {
      "put": {
        "tags": [
          "SoilTest"
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
                "$ref": "#/components/schemas/FddMeasurement"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/FddMeasurement"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/FddMeasurement"
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
    "/api/SoilTest/DeleteMeasurement": {
      "delete": {
        "tags": [
          "SoilTest"
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
    "/api/TaskApp/GetAllUsers": {
      "get": {
        "tags": [
          "TaskApp"
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
    "/api/TaskApp/login": {
      "post": {
        "tags": [
          "TaskApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/TaskApp/AddNewUser": {
      "post": {
        "tags": [
          "TaskApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/TaskApp/UpdateUser": {
      "post": {
        "tags": [
          "TaskApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/TaskApp/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "TaskApp"
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
    "/api/TaskApp/getAllTask": {
      "get": {
        "tags": [
          "TaskApp"
        ],
        "parameters": [
          {
            "name": "assignedTo",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "projectId",
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
    "/api/TaskApp/AddNewTask": {
      "post": {
        "tags": [
          "TaskApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JiraTask"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/JiraTask"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/JiraTask"
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
    "/api/TaskApp/UpdateTask": {
      "post": {
        "tags": [
          "TaskApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JiraTask"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/JiraTask"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/JiraTask"
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
    "/api/TaskApp/DeleteTAskByTaskId": {
      "delete": {
        "tags": [
          "TaskApp"
        ],
        "parameters": [
          {
            "name": "taskId",
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
    "/api/TaskApp/GetAllProject": {
      "get": {
        "tags": [
          "TaskApp"
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
    "/api/TaskApp/addNewProject": {
      "post": {
        "tags": [
          "TaskApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/jiraProject"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/jiraProject"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/jiraProject"
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
    "/api/UserApp/CreateNewUser": {
      "post": {
        "tags": [
          "UserApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserView"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserView"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserView"
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
    "/api/UserApp/login": {
      "post": {
        "tags": [
          "UserApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserModel"
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
    "/api/UserApp/refresh": {
      "post": {
        "tags": [
          "UserApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JWTLoginRefreshModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/JWTLoginRefreshModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/JWTLoginRefreshModel"
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
    "/api/UserApp/GetAllUsers": {
      "get": {
        "tags": [
          "UserApp"
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
    "/api/UserApp/send-reset-otp": {
      "post": {
        "tags": [
          "UserApp"
        ],
        "parameters": [
          {
            "name": "emailId",
            "in": "query",
            "schema": {
              "type": "string"
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
    "/api/UserApp/verify-otp-reset-password": {
      "post": {
        "tags": [
          "UserApp"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/VerifyOtpRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/VerifyOtpRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/VerifyOtpRequest"
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
    "/api/UserApp/update-password/{customerId}": {
      "put": {
        "tags": [
          "UserApp"
        ],
        "parameters": [
          {
            "name": "customerId",
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
                "$ref": "#/components/schemas/UpdatePasswordRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UpdatePasswordRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UpdatePasswordRequest"
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
    "/api/Values": {
      "get": {
        "tags": [
          "Values"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Values"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "string"
              }
            },
            "text/json": {
              "schema": {
                "type": "string"
              }
            },
            "application/*+json": {
              "schema": {
                "type": "string"
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
    "/api/Values/{id}": {
      "get": {
        "tags": [
          "Values"
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
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              },
              "text/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Values"
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
                "type": "string"
              }
            },
            "text/json": {
              "schema": {
                "type": "string"
              }
            },
            "application/*+json": {
              "schema": {
                "type": "string"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "delete": {
        "tags": [
          "Values"
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
    "/api/YoutubeVideos/GetAllUsers": {
      "get": {
        "tags": [
          "YoutubeVideos"
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
    "/api/YoutubeVideos/login": {
      "post": {
        "tags": [
          "YoutubeVideos"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUser"
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
    "/api/YoutubeVideos/AddNewUser": {
      "post": {
        "tags": [
          "YoutubeVideos"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/YoutubeVideos/UpdateUser": {
      "post": {
        "tags": [
          "YoutubeVideos"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/User"
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
    "/api/YoutubeVideos/DeleteUserByUserId": {
      "delete": {
        "tags": [
          "YoutubeVideos"
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
    "/api/YoutubeVideos/playlists": {
      "get": {
        "tags": [
          "YoutubeVideos"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "tags": [
          "YoutubeVideos"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PlaylistWithVideosDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PlaylistWithVideosDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PlaylistWithVideosDto"
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
    "/api/YoutubeVideos/playlists/{playlistId}": {
      "get": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "playlistId",
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
      },
      "put": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "playlistId",
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
                "$ref": "#/components/schemas/PlaylistWithVideosDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PlaylistWithVideosDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PlaylistWithVideosDto"
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
    "/api/YoutubeVideos/comments": {
      "post": {
        "tags": [
          "YoutubeVideos"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeComment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeComment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeComment"
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
    "/api/YoutubeVideos/comments/{videoId}": {
      "get": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "videoId",
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
    "/api/YoutubeVideos/comments/{commentId}": {
      "put": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "commentId",
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
                "$ref": "#/components/schemas/youtubeComment"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeComment"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeComment"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "delete": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "commentId",
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
    "/api/YoutubeVideos/likes/{videoId}": {
      "get": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "videoId",
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
    "/api/YoutubeVideos/likes": {
      "post": {
        "tags": [
          "YoutubeVideos"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeLike"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeLike"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/youtubeLike"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "delete": {
        "tags": [
          "YoutubeVideos"
        ],
        "parameters": [
          {
            "name": "videoId",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
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
      "ApplicantLoanView": {
        "type": "object",
        "properties": {
          "applicantID": {
            "type": "integer",
            "format": "int32"
          },
          "fullName": {
            "type": "string",
            "nullable": true
          },
          "applicationStatus": {
            "type": "string",
            "nullable": true
          },
          "panCard": {
            "type": "string",
            "nullable": true
          },
          "dateOfBirth": {
            "type": "string",
            "format": "date-time"
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "phone": {
            "type": "string",
            "nullable": true
          },
          "address": {
            "type": "string",
            "nullable": true
          },
          "city": {
            "type": "string",
            "nullable": true
          },
          "state": {
            "type": "string",
            "nullable": true
          },
          "zipCode": {
            "type": "string",
            "nullable": true
          },
          "annualIncome": {
            "type": "number",
            "format": "double"
          },
          "employmentStatus": {
            "type": "string",
            "nullable": true
          },
          "creditScore": {
            "type": "integer",
            "format": "int32"
          },
          "assets": {
            "type": "string",
            "nullable": true
          },
          "dateApplied": {
            "type": "string",
            "format": "date-time"
          },
          "loans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ApplicantsLoan"
            },
            "nullable": true
          },
          "customerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ApplicantsLoan": {
        "type": "object",
        "properties": {
          "loanID": {
            "type": "integer",
            "format": "int32"
          },
          "applicantID": {
            "type": "integer",
            "format": "int32"
          },
          "bankName": {
            "type": "string",
            "nullable": true
          },
          "loanAmount": {
            "type": "number",
            "format": "double"
          },
          "emi": {
            "type": "number",
            "format": "double"
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
      "Batch": {
        "required": [
          "batchName",
          "startDate",
          "teacher"
        ],
        "type": "object",
        "properties": {
          "batchId": {
            "type": "integer",
            "format": "int32"
          },
          "batchName": {
            "minLength": 1,
            "type": "string"
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "teacher": {
            "minLength": 1,
            "type": "string"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BudgetCategory": {
        "type": "object",
        "properties": {
          "categoryId": {
            "type": "integer",
            "format": "int32"
          },
          "categoryName": {
            "type": "string",
            "nullable": true
          },
          "logoImageUrl": {
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
      "BudgetTransaction": {
        "type": "object",
        "properties": {
          "transactionId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "categoryId": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "type": "number",
            "format": "double"
          },
          "date": {
            "type": "string",
            "format": "date-time"
          },
          "purpose": {
            "type": "string",
            "nullable": true
          },
          "transactionTypeId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "BusAddressLocation": {
        "type": "object",
        "properties": {
          "locationPointId": {
            "type": "integer",
            "format": "int32"
          },
          "locationId": {
            "type": "integer",
            "format": "int32"
          },
          "locationTitle": {
            "type": "string",
            "nullable": true
          },
          "locationAddress": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BusBooking": {
        "type": "object",
        "properties": {
          "bookingId": {
            "type": "integer",
            "format": "int32"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "bookingDate": {
            "type": "string",
            "format": "date-time"
          },
          "scheduleId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "BusBookingList": {
        "type": "object",
        "properties": {
          "bookingId": {
            "type": "integer",
            "format": "int32"
          },
          "busName": {
            "type": "string",
            "nullable": true
          },
          "fromLocation": {
            "type": "string",
            "nullable": true
          },
          "toLocation": {
            "type": "string",
            "nullable": true
          },
          "travelDate": {
            "type": "string",
            "format": "date-time"
          },
          "vendorName": {
            "type": "string",
            "nullable": true
          },
          "customerName": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "busVehicleNo": {
            "type": "string",
            "nullable": true
          },
          "seatNos": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "nullable": true
          },
          "vendorId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "BusBookingPassenger": {
        "type": "object",
        "properties": {
          "passengerId": {
            "type": "integer",
            "format": "int32"
          },
          "bookingId": {
            "type": "integer",
            "format": "int32"
          },
          "passengerName": {
            "type": "string",
            "nullable": true
          },
          "age": {
            "type": "integer",
            "format": "int32"
          },
          "gender": {
            "type": "string",
            "nullable": true
          },
          "seatNo": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "BusBookingViewModel": {
        "type": "object",
        "properties": {
          "bookingId": {
            "type": "integer",
            "format": "int32"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "bookingDate": {
            "type": "string",
            "format": "date-time"
          },
          "scheduleId": {
            "type": "integer",
            "format": "int32"
          },
          "busBookingPassengers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BusBookingPassenger"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BusLocation": {
        "type": "object",
        "properties": {
          "locationId": {
            "type": "integer",
            "format": "int32"
          },
          "locationName": {
            "type": "string",
            "nullable": true
          },
          "code": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BusSchedule": {
        "type": "object",
        "properties": {
          "scheduleId": {
            "type": "integer",
            "format": "int32"
          },
          "vendorId": {
            "type": "integer",
            "format": "int32"
          },
          "busName": {
            "type": "string",
            "nullable": true
          },
          "busVehicleNo": {
            "type": "string",
            "nullable": true
          },
          "fromLocation": {
            "type": "integer",
            "format": "int32"
          },
          "toLocation": {
            "type": "integer",
            "format": "int32"
          },
          "departureTime": {
            "type": "string",
            "format": "date-time"
          },
          "arrivalTime": {
            "type": "string",
            "format": "date-time"
          },
          "scheduleDate": {
            "type": "string",
            "format": "date-time"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "totalSeats": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "BusScheduleDetails": {
        "type": "object",
        "properties": {
          "availableSeats": {
            "type": "integer",
            "format": "int32"
          },
          "totalSeats": {
            "type": "integer",
            "format": "int32"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "arrivalTime": {
            "type": "string",
            "format": "date-time"
          },
          "scheduleId": {
            "type": "integer",
            "format": "int32"
          },
          "departureTime": {
            "type": "string",
            "format": "date-time"
          },
          "busName": {
            "type": "string",
            "nullable": true
          },
          "busVehicleNo": {
            "type": "string",
            "nullable": true
          },
          "fromLocationName": {
            "type": "string",
            "nullable": true
          },
          "toLocationName": {
            "type": "string",
            "nullable": true
          },
          "vendorName": {
            "type": "string",
            "nullable": true
          },
          "scheduleDate": {
            "type": "string",
            "format": "date-time"
          },
          "vendorId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "BusVendor": {
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer",
            "format": "int32"
          },
          "vendorName": {
            "type": "string",
            "nullable": true
          },
          "contactNo": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
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
      "ComplaintChildDepartment": {
        "type": "object",
        "properties": {
          "childDeptId": {
            "type": "integer",
            "format": "int32"
          },
          "parentDeptId": {
            "type": "integer",
            "format": "int32"
          },
          "departmentName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ComplaintDepartment": {
        "type": "object",
        "properties": {
          "departmentId": {
            "type": "integer",
            "format": "int32"
          },
          "departmentName": {
            "type": "string",
            "nullable": true
          },
          "departmentLogo": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ComplaintMaster": {
        "type": "object",
        "properties": {
          "complaintId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "childDeptId": {
            "type": "integer",
            "format": "int32"
          },
          "complaintTitle": {
            "type": "string",
            "nullable": true
          },
          "complaintNo": {
            "type": "string",
            "nullable": true
          },
          "complaintDetails": {
            "type": "string",
            "nullable": true
          },
          "isAlreadyReportedThis": {
            "type": "boolean"
          },
          "oldComplaintNo": {
            "type": "string",
            "nullable": true
          },
          "complaintStatusId": {
            "type": "integer",
            "format": "int32"
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
      "DocTrackerApplication": {
        "required": [
          "documentId",
          "status",
          "trackingId",
          "userId"
        ],
        "type": "object",
        "properties": {
          "applicationId": {
            "type": "integer",
            "format": "int32"
          },
          "trackingId": {
            "maxLength": 50,
            "minLength": 1,
            "type": "string"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "documentId": {
            "type": "integer",
            "format": "int32"
          },
          "status": {
            "maxLength": 50,
            "minLength": 1,
            "type": "string"
          },
          "submittedDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdatedDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "DocTrackerDepartment": {
        "required": [
          "departmentName"
        ],
        "type": "object",
        "properties": {
          "departmentId": {
            "type": "integer",
            "format": "int32"
          },
          "departmentName": {
            "maxLength": 100,
            "minLength": 1,
            "type": "string"
          },
          "description": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "DocTrackerDocument": {
        "required": [
          "documentName"
        ],
        "type": "object",
        "properties": {
          "documentId": {
            "type": "integer",
            "format": "int32"
          },
          "documentName": {
            "maxLength": 100,
            "minLength": 1,
            "type": "string"
          },
          "description": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "EcomProduct": {
        "required": [
          "category",
          "productName",
          "shortName"
        ],
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "productName": {
            "minLength": 1,
            "type": "string"
          },
          "shortName": {
            "minLength": 1,
            "type": "string"
          },
          "category": {
            "minLength": 1,
            "type": "string"
          },
          "sku": {
            "type": "string",
            "nullable": true
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "thumbnailImageUrl": {
            "type": "string",
            "nullable": true
          },
          "deliveryTimeSpan": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "Enrollment": {
        "required": [
          "batchId",
          "discount",
          "enrollDate",
          "narration",
          "studid",
          "totalFees"
        ],
        "type": "object",
        "properties": {
          "enrollId": {
            "type": "integer",
            "format": "int32"
          },
          "studid": {
            "type": "integer",
            "format": "int32"
          },
          "batchId": {
            "type": "integer",
            "format": "int32"
          },
          "totalFees": {
            "type": "number",
            "format": "double"
          },
          "narration": {
            "minLength": 1,
            "type": "string"
          },
          "enrollDate": {
            "type": "string",
            "format": "date-time"
          },
          "discount": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "ErmDashboard": {
        "type": "object",
        "properties": {
          "totalEmployee": {
            "type": "integer",
            "format": "int32"
          },
          "totalProject": {
            "type": "integer",
            "format": "int32"
          },
          "recentEmployee": {
            "nullable": true
          },
          "recentProjects": {
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ErmEmpLeaveDashboard": {
        "type": "object",
        "properties": {
          "earnedLeave": {
            "type": "integer",
            "format": "int32"
          },
          "totalNewLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "totalApprovedLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "totalCanceledLeave": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "ErmLeaveDashboard": {
        "type": "object",
        "properties": {
          "totalEmployee": {
            "type": "integer",
            "format": "int32"
          },
          "totalLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "totalNewLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "totalApprovedLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "totalCanceledLeave": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "ErpEmployees": {
        "type": "object",
        "properties": {
          "employeeId": {
            "type": "integer",
            "format": "int32"
          },
          "employeeName": {
            "type": "string",
            "nullable": true
          },
          "contactNo": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "deptId": {
            "type": "integer",
            "format": "int32"
          },
          "password": {
            "type": "string",
            "nullable": true
          },
          "gender": {
            "type": "string",
            "nullable": true
          },
          "role": {
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "ErpProjectEmployee": {
        "type": "object",
        "properties": {
          "empProjectId": {
            "type": "integer",
            "format": "int32"
          },
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "empId": {
            "type": "integer",
            "format": "int32"
          },
          "assignedDate": {
            "type": "string",
            "format": "date-time"
          },
          "role": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "ErpProjectEmployeeList": {
        "type": "object",
        "properties": {
          "empProjectId": {
            "type": "integer",
            "format": "int32"
          },
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "empId": {
            "type": "integer",
            "format": "int32"
          },
          "assignedDate": {
            "type": "string",
            "format": "date-time"
          },
          "role": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean"
          },
          "projectName": {
            "type": "string",
            "nullable": true
          },
          "employeeName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ErpProjects": {
        "type": "object",
        "properties": {
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "projectName": {
            "type": "string",
            "nullable": true
          },
          "clientName": {
            "type": "string",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "leadByEmpId": {
            "type": "integer",
            "format": "int32"
          },
          "contactPerson": {
            "type": "string",
            "nullable": true
          },
          "contactNo": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ErpProjectsList": {
        "type": "object",
        "properties": {
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "projectName": {
            "type": "string",
            "nullable": true
          },
          "clientName": {
            "type": "string",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "leadByEmpId": {
            "type": "integer",
            "format": "int32"
          },
          "contactPerson": {
            "type": "string",
            "nullable": true
          },
          "contactNo": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "employeeName": {
            "type": "string",
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
      "FddMeasurement": {
        "required": [
          "dryDensity",
          "drySoilWeight",
          "excavatedHoleVolume",
          "moistureContent",
          "sandVolumeUsed",
          "testId",
          "wetSoilWeight"
        ],
        "type": "object",
        "properties": {
          "measurementId": {
            "type": "integer",
            "format": "int32"
          },
          "testId": {
            "type": "integer",
            "format": "int32"
          },
          "excavatedHoleVolume": {
            "type": "number",
            "format": "double"
          },
          "wetSoilWeight": {
            "type": "number",
            "format": "double"
          },
          "moistureContent": {
            "type": "number",
            "format": "double"
          },
          "drySoilWeight": {
            "type": "number",
            "format": "double"
          },
          "sandVolumeUsed": {
            "type": "number",
            "format": "double"
          },
          "dryDensity": {
            "type": "number",
            "format": "double"
          },
          "soilClassification": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "FddSite": {
        "required": [
          "siteName"
        ],
        "type": "object",
        "properties": {
          "siteId": {
            "type": "integer",
            "format": "int32"
          },
          "siteName": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "location": {
            "maxLength": 500,
            "type": "string",
            "nullable": true
          },
          "clientName": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          },
          "weatherConditions": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "FddTest": {
        "required": [
          "engineerId",
          "siteId",
          "testDate",
          "testName",
          "testTypeId"
        ],
        "type": "object",
        "properties": {
          "testId": {
            "type": "integer",
            "format": "int32"
          },
          "siteId": {
            "type": "integer",
            "format": "int32"
          },
          "engineerId": {
            "type": "integer",
            "format": "int32"
          },
          "testTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "testDate": {
            "type": "string",
            "format": "date-time"
          },
          "remarks": {
            "maxLength": -1,
            "type": "string",
            "nullable": true
          },
          "approvalStatus": {
            "maxLength": 50,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "testName": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "FddTestType": {
        "required": [
          "testName"
        ],
        "type": "object",
        "properties": {
          "testTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "testName": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "referenceStandard": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "Fee": {
        "required": [
          "amount",
          "enrollId",
          "fees",
          "paymentDate",
          "paymentMode"
        ],
        "type": "object",
        "properties": {
          "paymentId": {
            "type": "integer",
            "format": "int32"
          },
          "enrollId": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "type": "number",
            "format": "double"
          },
          "paymentDate": {
            "type": "string",
            "format": "date-time"
          },
          "paymentMode": {
            "minLength": 1,
            "type": "string"
          },
          "transactionReference": {
            "type": "string",
            "nullable": true
          },
          "remarks": {
            "type": "string",
            "nullable": true
          },
          "fees": {
            "type": "number",
            "format": "double"
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
      "Incident": {
        "required": [
          "createdBy",
          "createdDate",
          "description",
          "priority",
          "status",
          "title"
        ],
        "type": "object",
        "properties": {
          "incidentId": {
            "type": "integer",
            "format": "int32"
          },
          "title": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "minLength": 1,
            "type": "string"
          },
          "priority": {
            "minLength": 1,
            "pattern": "^(Critical|High|Medium|Low)$",
            "type": "string"
          },
          "status": {
            "minLength": 1,
            "pattern": "^(Open|In Progress|Resolved|Closed)$",
            "type": "string"
          },
          "createdBy": {
            "type": "integer",
            "format": "int32"
          },
          "assignedTo": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "resolvedDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "IncidentsComment": {
        "required": [
          "commentText",
          "createdDate",
          "incidentId",
          "userId"
        ],
        "type": "object",
        "properties": {
          "commentId": {
            "type": "integer",
            "format": "int32"
          },
          "incidentId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "commentText": {
            "minLength": 1,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "InsuranceCategoryMaster": {
        "type": "object",
        "properties": {
          "insuranceCategoryId": {
            "type": "integer",
            "format": "int32"
          },
          "categoryName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "InsuranceCustomers": {
        "type": "object",
        "properties": {
          "customerId": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "mobile": {
            "type": "string",
            "nullable": true
          },
          "occupationType": {
            "type": "string",
            "nullable": true
          },
          "annualIncome": {
            "type": "number",
            "format": "double"
          },
          "education": {
            "type": "string",
            "nullable": true
          },
          "isSmoking": {
            "type": "boolean",
            "nullable": true
          },
          "city": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "InsurancePlanMaster": {
        "type": "object",
        "properties": {
          "planId": {
            "type": "integer",
            "format": "int32"
          },
          "planShortName": {
            "type": "string",
            "nullable": true
          },
          "planLongName": {
            "type": "string",
            "nullable": true
          },
          "sumAssured": {
            "type": "integer",
            "format": "int32"
          },
          "monthlyTotalPremium": {
            "type": "integer",
            "format": "int32"
          },
          "maxCoverageAge": {
            "type": "integer",
            "format": "int32"
          },
          "coverageAge": {
            "type": "integer",
            "format": "int32"
          },
          "vendorId": {
            "type": "integer",
            "format": "int32"
          },
          "yearlyTotalPremium": {
            "type": "integer",
            "format": "int32"
          },
          "insuranceTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "isMedicalNeeded": {
            "type": "boolean",
            "nullable": true
          },
          "isCibilCheck": {
            "type": "boolean",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "InsuranceTypeMaster": {
        "type": "object",
        "properties": {
          "insuranceTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "typeName": {
            "type": "string",
            "nullable": true
          },
          "logo": {
            "type": "string",
            "nullable": true
          },
          "categoryId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "InsuranceVendors": {
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer",
            "format": "int32"
          },
          "vendorName": {
            "type": "string",
            "nullable": true
          },
          "vendorLogo": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "contactNo": {
            "type": "string",
            "nullable": true
          },
          "altConatctNo": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "IntPtr": {
        "type": "object",
        "additionalProperties": false
      },
      "JWTLoginRefreshModel": {
        "type": "object",
        "properties": {
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "token": {
            "type": "string",
            "nullable": true
          },
          "refreshToken": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "JiraTask": {
        "required": [
          "projectId",
          "taskDescription",
          "taskPriority",
          "taskStatus",
          "taskTitle"
        ],
        "type": "object",
        "properties": {
          "taskId": {
            "type": "integer",
            "format": "int32"
          },
          "taskTitle": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "taskDescription": {
            "maxLength": 2000,
            "minLength": 1,
            "type": "string"
          },
          "taskStatus": {
            "maxLength": 50,
            "minLength": 1,
            "type": "string"
          },
          "taskPriority": {
            "maxLength": 20,
            "minLength": 1,
            "type": "string"
          },
          "assigneeId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "reporterId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "dueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "taskType": {
            "maxLength": 50,
            "type": "string",
            "nullable": true
          },
          "projectId": {
            "type": "integer",
            "format": "int32"
          }
        },
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
      "LeaveTypeMaster": {
        "type": "object",
        "properties": {
          "leaveTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "typeName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "LoginUser": {
        "type": "object",
        "properties": {
          "userName": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
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
      "PlaylistWithVideosDto": {
        "required": [
          "playlistName"
        ],
        "type": "object",
        "properties": {
          "playlistName": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "videos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/VideoDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ProjectDashboard": {
        "type": "object",
        "properties": {
          "totalDraft": {
            "type": "integer",
            "format": "int32"
          },
          "totalActive": {
            "type": "integer",
            "format": "int32"
          },
          "totalUsers": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "ProjectSubmission": {
        "required": [
          "contactNo",
          "course",
          "department",
          "emailId",
          "endDate",
          "projectTitle",
          "startDate",
          "studentName",
          "technologies",
          "userId"
        ],
        "type": "object",
        "properties": {
          "submissionId": {
            "type": "integer",
            "format": "int32"
          },
          "studentName": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "contactNo": {
            "maxLength": 10,
            "minLength": 10,
            "type": "string"
          },
          "emailId": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "format": "email"
          },
          "status": {
            "type": "string",
            "nullable": true
          },
          "projectTitle": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "format": "date-time"
          },
          "department": {
            "maxLength": 100,
            "minLength": 1,
            "type": "string"
          },
          "course": {
            "maxLength": 100,
            "minLength": 1,
            "type": "string"
          },
          "technologies": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "isGroupProject": {
            "type": "boolean"
          },
          "groupMembers": {
            "maxLength": 500,
            "type": "string",
            "nullable": true
          },
          "isSynopsisSubmitted": {
            "type": "boolean"
          },
          "dateOfSubmission": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "projectDescription": {
            "maxLength": 1000,
            "type": "string",
            "nullable": true
          },
          "gitHubUrl": {
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
      "PropertyView": {
        "required": [
          "address",
          "agentId",
          "city",
          "description",
          "pincode",
          "price",
          "state",
          "thumbnailImage",
          "title"
        ],
        "type": "object",
        "properties": {
          "propertyId": {
            "type": "integer",
            "format": "int32"
          },
          "title": {
            "minLength": 1,
            "type": "string"
          },
          "description": {
            "minLength": 1,
            "type": "string"
          },
          "propertyType": {
            "type": "string",
            "nullable": true
          },
          "address": {
            "minLength": 1,
            "type": "string"
          },
          "city": {
            "minLength": 1,
            "type": "string"
          },
          "state": {
            "minLength": 1,
            "type": "string"
          },
          "pincode": {
            "minLength": 1,
            "type": "string"
          },
          "agentId": {
            "type": "integer",
            "format": "int32"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "thumbnailImage": {
            "minLength": 1,
            "type": "string"
          },
          "realPropertyImages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RealPropertyImage"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "RFQ": {
        "required": [
          "partName",
          "quantity",
          "requiredByDate",
          "rfqName"
        ],
        "type": "object",
        "properties": {
          "rfqId": {
            "type": "integer",
            "format": "int32"
          },
          "manufacturerId": {
            "type": "integer",
            "format": "int32"
          },
          "partName": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "rfqName": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "description": {
            "maxLength": 1000,
            "type": "string",
            "nullable": true
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "dimension": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          },
          "requiredByDate": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "maxLength": 50,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "RFQContract": {
        "required": [
          "deliveryDate",
          "finalPrice"
        ],
        "type": "object",
        "properties": {
          "contractId": {
            "type": "integer",
            "format": "int32"
          },
          "rfqId": {
            "type": "integer",
            "format": "int32"
          },
          "supplierId": {
            "type": "integer",
            "format": "int32"
          },
          "finalPrice": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "deliveryDate": {
            "type": "string",
            "format": "date-time"
          },
          "contractStatus": {
            "maxLength": 50,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "RFQQuote": {
        "required": [
          "estimatedDeliveryDate",
          "quotedPrice"
        ],
        "type": "object",
        "properties": {
          "quoteId": {
            "type": "integer",
            "format": "int32"
          },
          "rfqId": {
            "type": "integer",
            "format": "int32"
          },
          "supplierId": {
            "type": "integer",
            "format": "int32"
          },
          "quotedPrice": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "estimatedDeliveryDate": {
            "type": "string",
            "format": "date-time"
          },
          "additionalNotes": {
            "maxLength": 1000,
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "RealEnquiry": {
        "required": [
          "enquiryDate",
          "enquiryMessage",
          "propertyId",
          "userId"
        ],
        "type": "object",
        "properties": {
          "enquiryId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyId": {
            "type": "integer",
            "format": "int32"
          },
          "enquiryMessage": {
            "minLength": 1,
            "type": "string"
          },
          "enquiryDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "RealPropertyImage": {
        "required": [
          "imageUrl",
          "orderNo",
          "propertyId"
        ],
        "type": "object",
        "properties": {
          "propertyImageId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyId": {
            "type": "integer",
            "format": "int32"
          },
          "imageUrl": {
            "minLength": 1,
            "type": "string"
          },
          "orderNo": {
            "type": "integer",
            "format": "int32"
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
      "Student": {
        "required": [
          "address",
          "city",
          "email",
          "name",
          "phone",
          "pinCode"
        ],
        "type": "object",
        "properties": {
          "studid": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "minLength": 1,
            "type": "string"
          },
          "email": {
            "minLength": 1,
            "type": "string"
          },
          "phone": {
            "minLength": 1,
            "type": "string"
          },
          "address": {
            "minLength": 1,
            "type": "string"
          },
          "city": {
            "minLength": 1,
            "type": "string"
          },
          "pinCode": {
            "minLength": 1,
            "type": "string"
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
      "UpdatePasswordRequest": {
        "type": "object",
        "properties": {
          "existingPassword": {
            "type": "string",
            "nullable": true
          },
          "newPassword": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UpworkBid": {
        "required": [
          "bidAmount",
          "estimatedDays",
          "projectId",
          "status",
          "userId"
        ],
        "type": "object",
        "properties": {
          "bidId": {
            "type": "integer",
            "format": "int32"
          },
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "bidAmount": {
            "minimum": 1,
            "type": "number",
            "format": "double"
          },
          "estimatedDays": {
            "maximum": 365,
            "minimum": 1,
            "type": "integer",
            "format": "int32"
          },
          "proposalText": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "UpworkProject": {
        "required": [
          "budget",
          "deadline",
          "description",
          "status",
          "title",
          "userId"
        ],
        "type": "object",
        "properties": {
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "title": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "minLength": 1,
            "type": "string"
          },
          "budget": {
            "minimum": 1,
            "type": "number",
            "format": "double"
          },
          "deadline": {
            "type": "string",
            "format": "date-time"
          },
          "skillsRequired": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "User": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "userName": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "nullable": true
          },
          "role": {
            "type": "string",
            "nullable": true
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "password": {
            "type": "string",
            "nullable": true
          },
          "projectName": {
            "type": "string",
            "nullable": true
          },
          "refreshToken": {
            "type": "string",
            "nullable": true
          },
          "refreshTokenExpiryTime": {
            "type": "string",
            "format": "date-time",
            "nullable": true
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
      "UserModel": {
        "type": "object",
        "properties": {
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserView": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserViewModel": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "userName": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserViewModelInce": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "userName": {
            "type": "string",
            "nullable": true
          },
          "emailId": {
            "type": "string",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          },
          "role": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "VerifyOtpRequest": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "nullable": true
          },
          "otp": {
            "type": "string",
            "nullable": true
          },
          "newPassword": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "VideoDto": {
        "required": [
          "title",
          "videoUrl"
        ],
        "type": "object",
        "properties": {
          "title": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "videoUrl": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string"
          },
          "thumbnailUrl": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "earnedLeaves": {
        "type": "object",
        "properties": {
          "earnedLeaveId": {
            "type": "integer",
            "format": "int32"
          },
          "employeeId": {
            "type": "integer",
            "format": "int32"
          },
          "totalEarnedLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "totalSickEarnedLeaves": {
            "type": "integer",
            "format": "int32"
          },
          "lastUpdatedDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "employeeLeaves": {
        "type": "object",
        "properties": {
          "leaveId": {
            "type": "integer",
            "format": "int32"
          },
          "employeeId": {
            "type": "integer",
            "format": "int32"
          },
          "leaveTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "startDate": {
            "type": "string",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "type": "string",
            "nullable": true
          },
          "reason": {
            "type": "string",
            "nullable": true
          },
          "requestDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "jiraProject": {
        "required": [
          "projectTitle"
        ],
        "type": "object",
        "properties": {
          "projectId": {
            "type": "integer",
            "format": "int32"
          },
          "projectTitle": {
            "maxLength": 50,
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "lmsCourseMaster": {
        "required": [
          "courseDescription",
          "courseName",
          "totalHours"
        ],
        "type": "object",
        "properties": {
          "courseId": {
            "type": "integer",
            "format": "int32"
          },
          "courseName": {
            "minLength": 1,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "totalHours": {
            "minLength": 1,
            "type": "string"
          },
          "totalVideos": {
            "type": "integer",
            "format": "int32"
          },
          "courseDescription": {
            "minLength": 1,
            "type": "string"
          },
          "thumbnailUrl": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "lmsCourseMasterView": {
        "required": [
          "courseDescription",
          "courseName",
          "totalHours"
        ],
        "type": "object",
        "properties": {
          "courseId": {
            "type": "integer",
            "format": "int32"
          },
          "courseName": {
            "minLength": 1,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "totalHours": {
            "minLength": 1,
            "type": "string"
          },
          "totalVideos": {
            "type": "integer",
            "format": "int32"
          },
          "courseDescription": {
            "minLength": 1,
            "type": "string"
          },
          "lmsCourseVideos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/lmsCourseVideos"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "lmsCourseProgress": {
        "required": [
          "enrollmentId",
          "startedDate",
          "videoId"
        ],
        "type": "object",
        "properties": {
          "progressId": {
            "type": "integer",
            "format": "int32"
          },
          "enrollmentId": {
            "type": "integer",
            "format": "int32"
          },
          "videoId": {
            "type": "integer",
            "format": "int32"
          },
          "isStarted": {
            "type": "boolean"
          },
          "isCompleted": {
            "type": "boolean"
          },
          "startedDate": {
            "type": "string",
            "format": "date-time"
          },
          "completedDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "lmsCourseVideos": {
        "required": [
          "courseId",
          "videoId"
        ],
        "type": "object",
        "properties": {
          "courseVideoId": {
            "type": "integer",
            "format": "int32"
          },
          "courseId": {
            "type": "integer",
            "format": "int32"
          },
          "videoId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "lmsEnrollment": {
        "required": [
          "courseId",
          "enrolledDate",
          "userId"
        ],
        "type": "object",
        "properties": {
          "enrollmentId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "courseId": {
            "type": "integer",
            "format": "int32"
          },
          "enrolledDate": {
            "type": "string",
            "format": "date-time"
          },
          "isCompleted": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "lmsVideos": {
        "required": [
          "totalDuration",
          "videoDescription",
          "videoTitle",
          "videoUrl"
        ],
        "type": "object",
        "properties": {
          "videoId": {
            "type": "integer",
            "format": "int32"
          },
          "videoUrl": {
            "minLength": 1,
            "type": "string"
          },
          "videoTitle": {
            "minLength": 1,
            "type": "string"
          },
          "videoDescription": {
            "minLength": 1,
            "type": "string"
          },
          "videoThumbnail": {
            "type": "string",
            "nullable": true
          },
          "totalDuration": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "miniProjectQuery": {
        "type": "object",
        "properties": {
          "queryId": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "city": {
            "type": "string",
            "nullable": true
          },
          "projectTitle": {
            "type": "string",
            "nullable": true
          },
          "projectDescription": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "propertyBookings": {
        "type": "object",
        "properties": {
          "bookingId": {
            "type": "integer",
            "format": "int32"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyId": {
            "type": "integer",
            "format": "int32"
          },
          "bookindDate": {
            "type": "string",
            "format": "date-time"
          },
          "bookingRate": {
            "type": "number",
            "format": "double"
          },
          "totalAmont": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "propertyBookingsView": {
        "type": "object",
        "properties": {
          "bookingId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyId": {
            "type": "integer",
            "format": "int32"
          },
          "bookindDate": {
            "type": "string",
            "format": "date-time"
          },
          "bookingRate": {
            "type": "number",
            "format": "double"
          },
          "totalAmont": {
            "type": "number",
            "format": "double"
          },
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "mobile": {
            "type": "string",
            "nullable": true
          },
          "emailid": {
            "type": "string",
            "nullable": true
          },
          "address": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "propertyCustomers": {
        "type": "object",
        "properties": {
          "custId": {
            "type": "integer",
            "format": "int32"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "mobile": {
            "type": "string",
            "nullable": true
          },
          "emailid": {
            "type": "string",
            "nullable": true
          },
          "address": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "propertyMasters": {
        "type": "object",
        "properties": {
          "propertyId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyNo": {
            "type": "integer",
            "format": "int32"
          },
          "facing": {
            "type": "string",
            "nullable": true
          },
          "totalArea": {
            "type": "string",
            "nullable": true
          },
          "rate": {
            "type": "number",
            "format": "double"
          },
          "siteId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "propertyTypes": {
        "type": "object",
        "properties": {
          "propertTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "propertyType": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "siteMasters": {
        "type": "object",
        "properties": {
          "siteId": {
            "type": "integer",
            "format": "int32"
          },
          "siteTitle": {
            "type": "string",
            "nullable": true
          },
          "location": {
            "type": "string",
            "nullable": true
          },
          "propertyTypeId": {
            "type": "integer",
            "format": "int32"
          },
          "city": {
            "type": "string",
            "nullable": true
          },
          "pincode": {
            "type": "string",
            "nullable": true
          },
          "state": {
            "type": "string",
            "nullable": true
          },
          "totalProperties": {
            "type": "integer",
            "format": "int32"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdatedDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "youtubeComment": {
        "required": [
          "commentText",
          "createdDate"
        ],
        "type": "object",
        "properties": {
          "commentId": {
            "type": "integer",
            "format": "int32"
          },
          "videoId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "commentText": {
            "minLength": 1,
            "type": "string"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "youtubeLike": {
        "required": [
          "createdDate"
        ],
        "type": "object",
        "properties": {
          "likeId": {
            "type": "integer",
            "format": "int32"
          },
          "videoId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "createdDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "youtubeVideo": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "url": {
            "type": "string",
            "nullable": true
          },
          "liveVersion": {
            "type": "string",
            "nullable": true
          },
          "videoType": {
            "type": "string",
            "nullable": true
          },
          "apiSwaggerUrl": {
            "type": "string",
            "nullable": true
          },
          "duration": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "addedDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      }
    }
  }
}