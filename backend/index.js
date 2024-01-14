const express = require('express');
const { todo } = require('./db');
const cors = require('cors')
const { createTodoSchema, udpateTodoSchema } = require('./types');
const app = express()

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get("/todos", async (req, resp) => {
    const todoList = await todo.find({});
    resp.json({
        todos: todoList
    })
})

app.post("/todos", async (req, resp) => {
    const createPayload = req.body;

    if(!createTodoSchema.safeParse(createPayload).success){
        resp.status(411).json({
            msg: "Input invalid!"
        })
    }else{
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        
        resp.status(201).json({
            msg: "Todo created successfully"
        })
    }
})

app.put("/completed", async (req, resp) => {
    if(!udpateTodoSchema.safeParse(req.body).success){
        resp.status(411).json({
            msg: "Input Invalid!"
        })
    }
    else{
        await todo.findOneAndUpdate({
            title: req.body.title
        },{
            completed: true
        })

        resp.status(201).json({
            msg: "Todo marked completed successfully"
        })
    }
})

app.use((req, resp, next) => {
    resp.status(404).send("Route not found!")

})

app.use((err, req, resp, next) => {
    console.log("Exception occured")
    console.log(err)
    resp.status(500).send("Internal Server Error")
})

app.listen(3000,() => {
    console.log("Backend server started at port 3000")
})
