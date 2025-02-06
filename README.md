#TaskFlow - Task Management System

🚀 Project Title
TaskFlow - A MERN-based task management system with backend APIs and a responsive React.js frontend.

📝 Description
TaskFlow is a simple yet effective task management system designed to evaluate a developer's ability to work with the MERN stack.
It allows users to:

Manage tasks (Add, Update, Delete)
Toggle task status between "Pending" and "Completed"
View tasks in an interactive frontend UI
🔧 Installation & Setup Guide

1. Clone the Repository
git clone https://github.com/yourusername/taskflow.git
cd taskflow

2. Backend Setup
Navigate to the backend directory:
cd backend
Install dependencies:
npm install
Create a .env file and add the following:
MONGO_URI=mongodb://127.0.0.1:27017/taskflow
PORT=5000
Start the backend server:
npm run dev

3. Frontend Setup
Navigate to the frontend directory:
cd ../frontend
Install dependencies:
npm install

Update API URL in taskService.js if necessary:
javascript
const API_BASE_URL = 'http://localhost:5000/api/tasks';
Start the frontend development server:
npm start

📖 API Documentation
Base URL:
http://localhost:5000/api/tasks
HTTP Method	Endpoint	Description
GET	/	        Fetch all tasks
POST	/	      Create a new task
PUT	/:id	    Update task status
DELETE	/:id	Delete a task

Example API Request & Response
POST Request: Create a new task
URL: http://localhost:5000/api/tasks
Request Body:
{
  "title": "Complete TaskFlow Project"
}

Response:
{
  "_id": "63f6c9ef76f4b9d001fc",
  "title": "Complete TaskFlow Project",
  "status": "Pending",
  "createdAt": "2025-02-06T14:30:29.000Z"
}


💻 Frontend Setup Guide

Use Axios for API requests.
Implement state management with React Hooks (useState, useEffect).

Key components:
AddTask.js: Task creation form.
TaskList.js: Renders the task list.
TaskItem.js: Handles task actions like status toggle and deletion.

🌐 Deployment Instructions
Backend API Deployment on Render
Create a Render account.
Create a new Web Service for your backend.
Link your GitHub repository and set environment variables:
MONGO_URI=<Your MongoDB URI>

Deploy and obtain the API URL.
Frontend Deployment on Render
Create a new Static Site on Render.
Set the build command:
npm run build
Deploy and use the provided URL as your frontend link.

🌍 Live API & Frontend Deployment
API Endpoint: TaskFlow API
Frontend App: TaskFlow Frontend
🛠️ Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose
Frontend: React.js, Axios
Deployment: Render
