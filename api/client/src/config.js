import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://hemanthdevblog.herokuapp.com/api/",
});
