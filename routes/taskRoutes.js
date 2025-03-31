import express from 'express'
import Task from '../model/Task.js'
const router = express.Router(); // Create an Express router instance

// Create Task → (POST /task)
router.post("/",  async (req, res) => {
    try{
        const task = new Task(req.body); // Create a new Task instance with data from the request body
        await task.save(); // Save the task to the database
        res.status(201).json(task); // Send a 201 (Created) response with the created task
    }catch(err){
        res.status(400).json({error: err.message});  // Send a 400 (Bad Request) response with the error message
    }
})


export default router; // Export the router