const basicInfo = require("./basicInfo")
const components = require("./components.js")
const tasks = require("./task.js")

module.exports = {
    ...basicInfo,
    ...tasks,
    ...components,
}