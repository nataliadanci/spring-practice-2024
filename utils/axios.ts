import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://phpspringpractice2024.web-staging.eu/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
