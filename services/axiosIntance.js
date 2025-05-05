import axios from "axios";

const api = axios.create({
  baseURL: "https://pokemon-rest-api.vercel.app/api",
});

export default api;
