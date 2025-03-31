# Task Manager API

This project is a simple Task Manager API built with Node.js, Express, and Mongoose. It provides an endpoint to create tasks and uses MongoDB for data storage.

## Features

* **Task Creation:**
    * Allows users to create new tasks via a `POST /tasks` endpoint.
    * Task data is stored in a MongoDB database.
    * Task model includes title validation.
* **Retrieve All Tasks:**
    * Retrieves all tasks via a `GET /tasks` endpoint.
* **Retrieve Single Task:**
    * Retrieves a single task based on its ID via `GET /tasks/:id` endpoint.
* **Update Task:**
    * Updates a task based on its ID via `PUT /tasks/:id` endpoint.
* **Delete Task:**
    * Deletes a task based on its ID via `DELETE /tasks/:id` endpoint.
* **MongoDB Integration:**
    * Uses Mongoose to interact with MongoDB.
    * Configured to connect to a MongoDB Atlas cluster (specified in `.env`).
* **Express.js Server:**
    * Sets up an Express.js server to handle API requests.
    * Includes middleware for JSON parsing (`express.json()`).
    * Includes middleware for request body logging.
* **.env Configuration:**
    * Uses dotenv to manage environment variables, specifically the MongoDB connection string.
* **Modular Routes:**
    * Task routes are organized in a separate `taskRoutes.js` file for better code organization.

## Technologies Used

* Node.js
* Express.js
* Mongoose
* MongoDB
* dotenv

## Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/JohanDC-1999/node-task-manager-api.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    * Create a `.env` file in the root directory.
    * Add your MongoDB connection string:

        ```
        MONGO_URI=<your_mongodb_uri>
        MONGO_DB=<your_database_name>
        PORT=<port_number> #optional, defaults to 5000
        ```

    * Replace `<your_mongodb_uri>` and `<your_database_name>` with your actual MongoDB connection details.

4.  **Run the server:**

    ```bash
    npm start
    ```

    The server will start running on the specified port (or port 5000 by default).

## API Endpoints

* **`POST /tasks`:**
    * Creates a new task.
    * Request body:

        ```json
        {
          "title": "Task title",
          "completed": false
        }
        ```

    * Response:
        * 201 (Created) - Returns the created task object.
        * 400 (Bad Request) - Returns an error message if the request is invalid.
* **`GET /tasks`:**
    * Retrieves all tasks.
    * Response:
        * 200 (OK) - Returns an array of task objects.
        * 500 (Internal Server Error) - Returns an error message if a server error occurs.
* **`GET /tasks/:id`:**
    * Retrieves a single task based on its ID.
    * Response:
        * 200 (OK) - Returns the task object.
        * 400 (Bad Request) - Returns a "Task not found" message if the task does not exist.
        * 500 (Internal Server Error) - Returns an error message if a server error occurs.

## Testing with cURL

You can use cURL to test the API endpoints. Here are some examples:

* **Create a task:**

    ```bash
    curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d "{\"title\": \"Buy groceries\"}"
    ```

    * Replace `http://localhost:5000/tasks` with your API's URL if it's running on a different port or domain.

* **Get all tasks:**

    ```bash
    curl http://localhost:5000/tasks
    ```

* **Get a specific task:**

    ```bash
    curl http://localhost:5000/tasks/64109315354992925232432a #replace with a real task ID
    ```
* **Update a task:**

    ```bash
    curl -X PUT http://localhost:5000/tasks/67ea50b442be85c4461d7379 -H "Content-Type: application/json" -d "{\"title\": \"Buy milk\"}" #replace with a real task ID
    ```

* **Delete a task:**

    ```bash
    curl -X DELETE http://localhost:5000/tasks/64109315354992925232432a #replace with a real task ID
    ```
* **Example of a bad request:**

    ```bash
    curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d "{}"
    ```

    * This will return an error because the title is required.

## Project Structure
```
task-manager-api/
├── model/
│   └── Task.js          # Mongoose task model
├── routes/
│   └── taskRoutes.js    # Task API routes
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── package-lock.json    # Dependency lock file
├── package.json         # Project dependencies
├── README.md            # Project documentation
└── server.js            # Main server file
```

## Future Enhancements

* Implement `GET /tasks` endpoint to retrieve all tasks.
* Implement `GET /tasks/:id` endpoint to retrieve a single task.
* Implement `PUT /tasks/:id` endpoint to update a task.
* Implement `DELETE /tasks/:id` endpoint to delete a task.
* Add more robust error handling and validation.
* Add authentication and authorization.
* Build a frontend that uses these apis

## Resources
* [Getting Started With MongoDB & Mongoose](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/) USE LOCAL DB OR CLUSTER
* [MongoDB SET UP CLUSTER](https://www.mongodb.com/docs/atlas/getting-started/)
* [Mongoose Model Methods](https://mongoosejs.com/docs/5.x/docs/api/model.html)
* [Mongoose findByIdAndUpdate() Function](https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/)