import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express'
import taskRoutes from './routes/taskRoutes.js'
import Task from './model/Task.js';

const app = express();
app.use(express.json()); // Enable JSON parsing
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log(req.body);
  next(); // Pass control to the next middleware or route handler
})

app.use("/tasks", taskRoutes);

mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
  .then(() => console.log(`Connected to ${process.env.MONGO_DB} db`)) // use MongoDB Atlas cluster, url + db name
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
