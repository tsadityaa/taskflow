import axios from 'axios';


const API_BASE_URL = "https://taskflow-backend-3i7c.onrender.com"; // Ensure this matches your backend URL

export const getTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createTask = async (title) => {
  const response = await axios.post(API_BASE_URL, { title });
  return response.data;
};

export const updateTaskStatus = async (id, status) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, { status });
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};

