import express from 'express'
import Task from '../model/Task.js'
const router = express.Router(); // Create an Express router instance

// Create Task → (POST /tasks)
router.post("/",  async (req, res) => {
    try{
        const task = new Task(req.body); // Create a new Task instance with data from the request body
        await task.save(); // Save the task to the database
        res.status(201).json(task); // Send a 201 (Created) response with the created task
    }catch(err){
        res.status(400).json({error: err.message});  // Send a 400 (Bad Request) response with the error message
    }
})

// Get all Tasks → (GET /tasks)
router.get("/", async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({error: err.message}); 
    }
})

// Get a request based on the id → (GET /tasks/:id")
router.get("/:id", async (req, res) => { // The :id part tells Express that this segment of the URL is a variable.
    try{
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(400).json({message: "Task not found"});
        res.json(task);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})


export default router; // Export the router