import axios from "axios";

// ✅ Use /api if your backend routes are like /api/projects
// const LOCALHOST = "http://localhost:5000";
const LOCALHOST = "https://portfolio-backend-evjw.onrender.com";

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Attach admin token dynamically for every request
api.interceptors.request.use(
  (config) => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      config.headers.Authorization = adminToken; // ✅ backend expects this
    }

    // ✅ IMPORTANT: DO NOT force JSON content-type
    // axios will set:
    // - application/json for plain objects
    // - multipart/form-data for FormData uploads
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
