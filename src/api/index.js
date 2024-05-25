import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // frontend/src/api/workouts.js

// const BASE_URL = "http://localhost:8080/api/";

// export const createWorkout = async (workoutData) => {
//   try {
//     const response = await axios.post(BASE_URL, workoutData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating workout:', error);
//     throw error;
//   }
// };
