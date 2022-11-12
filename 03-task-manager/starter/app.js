const express = require("express");
const app = express();
const tasks = require("./routes/tasks")

// middleware

app.use(express.json())

app.get("/hello", (req, res)=>{
    res.send("Task Manager App");
})

app.use("/api/v1/task", tasks)


// app.get("/api/v1/tasks")        -- get all the tasks
// app.post("/api/v1/task")        -- create a new task
// app.get("/api/v1/tasks/:id")    -- get single task
// app.patch("/api/v1/tasks/:id")  -- update task
// app.delete("/api/v1/task/:id")  -- delete task


const port = 3000

app.listen(port, console.log(`Server is listening on ${port}...`))
