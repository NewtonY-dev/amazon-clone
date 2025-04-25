import axios from "axios";

const axiosInstance = axios.create({
  // local firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-4333d/us-central1/api",

  // amazon-clone api deployed on render.com
  baseURL: "https://amazon-clone-api-wox6.onrender.com",
});

export { axiosInstance };
