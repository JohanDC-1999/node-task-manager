import express from 'express'
import Task from '../model/Task.js'
const router = express.Router();

// Create Task → (POST /task)
router.post("/",  async (req, res) => {
    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    }catch(err){
        res.status(400).json({error: err.message});
    }
})


export default router;