const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dipitmadan:Ab%40yGoldmine12@cluster0.fz8gj9e.mongodb.net/todos");

const todoSchema =  mongoose.Schema({
    title:String,
    description:String,
    id:Number
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {todo};