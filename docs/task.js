const { schema } = require("../models/Task");

module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Create a task"],
                desctiption: "Create a task",
                operationId: "createTask",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TasksBody"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Task created succesfully"
                    },
                    500:{
                        description: "Server error"
                    }
                }
            },
            },
        "/": {
            get: {
                tags: ["Get all tasks"],
                description: "Get all task at the server",
                operationId: "getTasks",
                parameters: null,
                responses: {
                    200: {
                        description: "All tasks getting succesfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    },
                    500:{
                        description: "Server error"
                    }
                }
            },
        },
        "/id/{_id}": {
            put: {
                summary: "",
                tags: ["Change a task"],
                description: "Change task",
                operationId: "changeTask",
                parameters: [
                  {
                    name: "_id",
                    in: "path",           
                    description: "Id task change"
                  }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TasksBody"
                            }
                        }
                    }
                },
                responses: {
                  200: {
                    description: "Task change successfully",
                  },
                  500: {
                    description: "Server error",
                  },
                },
              },
            get: {
                tags: ["Get a single task"],
                description: "Get a task by ID",
                operationId: "getTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {$ref: "#/components/schemas/TaskID"},
                        description: "ID task get a task by id"
                    }
                ],
                requestBody: null,
                responses: {
                    200: {
                        description: "Task getting succesfully"
                    },
                    500:{
                        description: "Server error"
                    }
                }
            },
            delete: {
                tags: ["Delete a single task"],
                description: "Delete a task by ID",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {$ref: "#/components/schemas/TaskID"},
                        description: "ID task delete"
                    }
                ],
                requestBody: null,
                responses: {
                    200: {description: "Task deleted successfully"},
                    500:{description: "Server error"}
                }
            }
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: ["Task completed"],
                description: "Mark a task that is completed",
                operationId: "putTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {$ref: "#/components/schemas/TaskID"},
                        description: "ID task delete"
                    }
                ],
                responses: {
                    200: {
                        description: "Mark task completed succesfully"
                    },
                    500:{
                        description: "Server error"
                    }
                }
            }
        },
    }
}