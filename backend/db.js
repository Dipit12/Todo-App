const mongoose = require("mongoose");

mongoose.connect("YOUR_MONGO_CONNECTION_STRING");

const todoSchema =  mongoose.Schema({
    title:String,
    description:String,
    id:Number
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {todo};
