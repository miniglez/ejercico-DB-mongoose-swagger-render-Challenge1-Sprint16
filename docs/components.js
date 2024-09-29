module.exports = {
    components:{
        schemas: {
            Tasks: {
                type: "object",
                properties: {
                    _id:{
                        type: "objectId",
                        description: "Task identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    title: {
                        type: "String",
                        description: "Title of task",
                        example: "Make index.js"
                    },
                    completed: {
                        type: "Boleean",
                        description: "Change to true when the task is finished",
                        example: "true"
                    }
                }
            },
            _id: {
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