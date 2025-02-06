# TaskFlow - Task Management System

## 🚀 Project Title
TaskFlow - A MERN-based task management system with backend APIs and a responsive React.js frontend.

## 📝 Description
TaskFlow is a simple yet effective task management system designed to evaluate a developer's ability to work with the MERN stack. It allows users to:

- 📋 Manage tasks (Add, Update, Delete)
- 🔄 Toggle task status between "Pending" and "Completed"
- 🌐 View tasks in an interactive frontend UI

---

## 🔧 Installation & Setup Guide

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/taskflow.git
cd taskflow
```

### 2. Backend Setup
#### Navigate to the backend directory:
```bash
cd backend
```

#### Install dependencies:
```bash
npm install
```

#### Create a `.env` file and add the following:
```
MONGO_URI=mongodb://127.0.0.1:27017/taskflow
PORT=5000
```

#### Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
#### Navigate to the frontend directory:
```bash
cd ../frontend
```

#### Install dependencies:
```bash
npm install
```

#### Update API URL in `taskService.js` if necessary:
```javascript
const API_BASE_URL = 'http://localhost:5000/api/tasks';
```

#### Start the frontend development server:
```bash
npm start
```

---

## 📖 API Documentation

### Base URL:
```
http://localhost:5000/api/tasks
```

### Endpoints:

| HTTP Method | Endpoint | Description |
|------------|---------|-------------|
| GET        | `/`     | Fetch all tasks |
| POST       | `/`     | Create a new task |
| PUT        | `/:id`  | Update task status |
| DELETE     | `/:id`  | Delete a task |

### Example API Request & Response

#### POST Request: Create a new task
**URL:** `http://localhost:5000/api/tasks`

**Request Body:**
```json
{
  "title": "Complete TaskFlow Project"
}
```

**Response:**
```json
{
  "_id": "63f6c9ef76f4b9d001fc",
  "title": "Complete TaskFlow Project",
  "status": "Pending",
  "createdAt": "2025-02-06T14:30:29.000Z"
}
```

---

## 💻 Frontend Setup Guide

- Use Axios for API requests.
- Implement state management with React Hooks (`useState`, `useEffect`).

### Key Components:
- `AddTask.js`: Task creation form.
- `TaskList.js`: Renders the task list.
- `TaskItem.js`: Handles task actions like status toggle and deletion.

---

## 🌐 Deployment Instructions

### Backend API Deployment on Render
1. Create a Render account.
2. Create a new Web Service for your backend.
3. Link your GitHub repository and set environment variables:
   ```
   MONGO_URI=<Your MongoDB URI>
   ```
4. Deploy and obtain the API URL.

### Frontend Deployment on Render
1. Create a new Static Site on Render.
2. Set the build command:
   ```bash
   npm run build
   ```
3. Deploy and use the provided URL as your frontend link.

---

## 🌍 Live API & Frontend Deployment
- **API Endpoint:** [TaskFlow API](#)
- **Frontend App:** [TaskFlow Frontend](#)

---

## 🛠️ Technologies Used
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React.js, Axios
- **Deployment:** Render
