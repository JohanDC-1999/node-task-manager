import 'dotenv/config'; // Load environment variables from .env file
import mongoose from 'mongoose'; // Import Mongoose for MongoDB interaction
import express from 'express'; // Import Express.js for creating the server
import taskRoutes from './routes/taskRoutes.js'; // Import task routes from taskRoutes.js
import Task from './model/Task.js'; // Import the Task model

const app = express(); // Create an Express application instance

app.use(express.json()); // Enable JSON parsing for request bodies

// Middleware for logging request details
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`); // Log request timestamp, method, and URL
    console.log(req.body); // Log the request body
    next();
});

app.use("/tasks", taskRoutes); // Mount the task routes on the /tasks path, allows to use '/' in router to convert to /tasks

// Connect to MongoDB using Mongoose
mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
    .then(() => console.log(`Connected to ${process.env.MONGO_DB} db`)) // Log success message on successful connection
    .catch(err => console.log(err)); // Log error message if connection fails

const PORT = process.env.PORT || 5000; // Define the port number (use environment variable or default to 5000)

// Start the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
