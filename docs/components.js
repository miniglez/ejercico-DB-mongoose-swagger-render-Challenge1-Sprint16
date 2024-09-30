module.exports = {
    components:{
        schemas: {
            TasksBody: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "Title of task",
                        example: "Make index.js"
                    }
                }
            },
            Task: {
                type: "object",
                properties: {
                    _id:{
                        type_: "objectId",
                        description: "An id of a task",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    title: {
                        type: "string",
                        description: "Title of task",
                        example: "Make index.js"
                    },
                    completed: {
                        type: "boolean",
                        description: "Finished task",
                        example: "false"
                    }
                }
            },
            TaskID: {
                type: "String",
                properties: {
                    _id: {
                        type: "objectId",
                        description: "An id of a task",
                        example: "6201064b0028de7866e2b2c4"
                    }
                }
            }
        }
    }
}