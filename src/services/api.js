import axios from "axios";

const API = axios.create({
  baseURL: "https://api.eezytrade.in", // Backend URL
});

export const login = (credentials) => API.post("/user/login", credentials);
export const signup = (userData) => API.post("/user/signup", userData);
export const saveConfig = (config) => API.post("/config", config);

export default API;