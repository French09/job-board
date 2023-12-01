import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://koyo-app-api.onrender.com/",
});

export default customFetch;
