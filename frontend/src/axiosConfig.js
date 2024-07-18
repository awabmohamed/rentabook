import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://18.119.138.22:8000/api/',
});

export default axiosInstance;
