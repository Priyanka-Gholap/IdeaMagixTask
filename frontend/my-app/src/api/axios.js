import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-2-nbyp.onrender.com" || "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token && !req.url.includes("/auth")) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;