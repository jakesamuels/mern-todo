# MERN Stack To-Do List App

## View Deployed Project [https://remarkable-hotteok-e72c13.netlify.app/]

## Project Overview

This is a full-stack To-Do List application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to effortlessly create, view, update, and delete tasks. This project was developed as a hands-on exercise to solidify MERN stack fundamentals, focusing on building a complete CRUD (Create, Read, Update, Delete) application from scratch.

## Features

- **Create Tasks:** Add new To-Do items with a title and an optional description.
- **View Tasks:** Display a list of all existing To-Do items.
- **Mark as Complete:** Toggle the completion status of any task.
- **Edit Tasks:** Modify the title and description of an existing task.
- **Delete Tasks:** Permanently remove tasks from the list.
- **Responsive Design:** Basic styling ensures usability across different screen sizes.
- **API-Driven:** Seamless communication between the React frontend and Node.js/Express backend.

## Technologies Used

- **Frontend:**
  - **React:** A JavaScript library for building user interfaces.
  - **Axios:** Promise-based HTTP client for making API requests.
  - **CSS:** For basic styling.
- **Backend:**
  - **Node.js:** JavaScript runtime environment.
  - **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
  - **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
  - **CORS:** Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  - **Dotenv:** Module to load environment variables from a `.env` file.
- **Database:**
  - **MongoDB Atlas:** A cloud-hosted NoSQL database service.

## Project Structure

The project is divided into two main directories:

mern-todo/
├── backend/
│ ├── config/ # Database connection setup
│ ├── controllers/ # Business logic for API endpoints
│ ├── models/ # Mongoose schemas and models
│ ├── routes/ # API routes definitions
│ ├── .env # Environment variables (e.g., MongoDB URI)
│ ├── package.json
│ └── server.js # Main backend server file
└── frontend/
├── public/
├── src/
│ ├── components/ # Reusable React components (TaskItem, TaskList, TaskForm)
│ ├── App.js # Main React application component
│ ├── index.js # React app entry point
│ └── ... # Other React files and styling
├── package.json
└──

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js and npm:** Download from [nodejs.org](https://nodejs.org/).
- **MongoDB Atlas Account:** Sign up for a free tier at [cloud.mongodb.com](https://cloud.mongodb.com/).
  - Create a new cluster.
  - Set up a database user with a strong password.
  - Configure network access to allow connections from your IP address (or `0.0.0.0/0` for broader access, but be cautious with this in production).
  - Obtain your MongoDB connection string (usually starts with `mongodb+srv://`).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd mern-todo
    ```

2.  **Backend Setup:**

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add your MongoDB connection string:

    ```
    MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"
    PORT=5000 # Or any port you prefer
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    _(No `.env` needed for the frontend in this basic setup as the backend URL is hardcoded or can be a simple constant, but for production, you might want to manage it.)_

### Running the Application

1.  **Start the Backend Server:**
    Open your terminal, navigate to the `backend` directory, and run:

    ```bash
    cd backend
    npm start
    # or if you installed nodemon:
    # npm run dev
    ```

    The backend server will typically run on `http://localhost:5000` (or the port defined in your `.env`).

2.  **Start the Frontend Development Server:**
    Open _a new terminal window_, navigate to the `frontend` directory, and run:
    ```bash
    cd frontend
    npm start
    ```
    The React development server will usually open your application in your browser at `http://localhost:3000`.

You should now see the To-Do List application in your browser, ready for use!

## API Endpoints (Backend)

The backend provides the following RESTful API endpoints:

| Method   | Endpoint         | Description             | Request Body                                                    |
| :------- | :--------------- | :---------------------- | :-------------------------------------------------------------- |
| `GET`    | `/api/tasks`     | Get all tasks           | None                                                            |
| `GET`    | `/api/tasks/:id` | Get a single task by ID | None                                                            |
| `POST`   | `/api/tasks`     | Create a new task       | `{ title: String, description: String }`                        |
| `PUT`    | `/api/tasks/:id` | Update an existing task | `{ title?: String, description?: String, completed?: Boolean }` |
| `DELETE` | `/api/tasks/:id` | Delete a task           | None                                                            |

## Future Enhancements (Ideas for further development)

- User authentication and authorization.
- Filtering tasks (e.g., show active, completed).
- Sorting tasks (e.g., by creation date, alphabetical).
- Search functionality.
- Categorization of tasks.
- Date pickers for due dates.
- More advanced UI/UX with a component library (e.g., Material-UI, Ant Design, Chakra UI).
