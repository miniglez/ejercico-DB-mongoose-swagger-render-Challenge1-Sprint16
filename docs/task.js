const { schema } = require("../models/Task");

module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Task: " Create a task"
                },
                desctiption: "Create a task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Tasks"
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
                tags: {
                    Task: " Get all tasks"
                },
                description: "Get all task at the server",
                operationId: "getTasks",
                parameters: [],
                requestBody: {
                    content: {
                        "aplication/json": {
                            schema:{
                                $ref: "#/components/schemas/Tasks"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "All tasks getting succesfully"
                    },
                    500:{
                        description: "Server error"
                    }
                }
            },
        },
        "/id/{_id}": {
            get: {
                tags: {
                    Task: " Get a single task"
                },
                description: "Get a task by ID",
                operationId: "getTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {$ref: "#/components/schemas/_id"}
                    }
                ],
                requestBody: {
                    content: {
                        "aplication/json": {
                            schema:{
                                $ref: "#/components/schemas/Tasks"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Task getting succesfully"
                    },
                    500:{
                        description: "Server error"
                    }
                }
            }
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: {
                    Task: " Task completed"
                },
                description: "Mark a task that is completed",
                operationId: "putTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {$ref: "#/components/schemas/_id"}
                    }
                ],
                requestBody: {
                    content: {
                        "aplication/json": {
                            schema:{
                                $ref: "#/components/schemas/Tasks"
                            }
                        }
                    }
                },
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
        "/id/{:_id}": {
            delete: {
                tags: {
                    Task: " Delete a single task"
                },
                description: "Delete a task by ID",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {$ref: "#/components/schemas/_id"}
                    }
                ],
                requestBody: {
                    content: {
                        "aplication/json": {
                            schema:{
                                $ref: "#/components/schemas/Tasks"
                            }
                        }
                    }
                },
                responses: {
                    200: {description: "Task deleted successfully"},
                    500:{description: "Server error"}
                }
            }
        },
    }
}