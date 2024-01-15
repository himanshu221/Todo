const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect('mongodb+srv://admin:W5ExPE6wId3akFsg@himanshucluster.e2eiudg.mongodb.net/todo_app')

const todo = mongoose.model('Todo',{
    title: String,
    description: String,
    completed: Boolean
})



module.exports = {
    todo
}