// write basic express boilerplate code with json webtoken

const express = require("express");
const jwt = require("jsonwebtoken");
const { todoSchema } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This is the landing page");
})

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = todoSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
      res.status(411).json({ msg: "Invalid payload" });
      return;
    }
  
    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false
    });
  
    res.json(newTodo);
  });

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({todos});
})


app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updatedTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({msg:"Invalid payload"});
        return;
    }
    await todo.update({
        _id: updatePayload.id
    },{
        completed:true
    })
    res.json({msg:"Todo marked as completed"});
})
app.listen(3000, ()=>{
    console.log("Server is running")
});
