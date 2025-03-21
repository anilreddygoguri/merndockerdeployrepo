import axios from "axios";

const API_URL = "http://localhost:5000/users"; // Your backend API endpoint

// Function to create a new user
export const createUser = (user) => axios.post(API_URL, user);

// Function to fetch all users
export const getUsers = () => axios.get(API_URL);
