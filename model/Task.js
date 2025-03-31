import mongoose from 'mongoose';
//const { Schema, model } = mongoose;

// const taskSchema = new Schema({

// });

const taskSchema = mongoose.Schema({
    title:{
        type: String, required: true
    },
    completed: {
        type: Boolean, required: false
    }
})
const Task = mongoose.model('Task', taskSchema); // Looks for or creates collection called 'tasks' - Takes lowercase and plural of param1 to search or create collection
export default Task;