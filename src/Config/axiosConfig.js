import axios from "axios";

const userAuthToken = localStorage["token"]
  ? localStorage.getItem("token")
  : null;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: userAuthToken,
  },
});

export { axiosInstance };
