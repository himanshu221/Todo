const zod = require('zod');

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const udpateTodoSchema = zod.object({
    title: zod.string()
})

module.exports = {
    createTodoSchema,
    udpateTodoSchema
}