import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title:{
        type: String, required: true // Title is required
    },
    completed: {
        type: Boolean, required: false // Completed is optional
    }
})

// Create the Task model
const Task = mongoose.model('Task', taskSchema); // Looks for or creates collection called 'tasks' - Takes lowercase and plural of param1 to search or create collection

// Export the Task model
export default Task;