import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL2,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.API_KEY,
  },
});

export default axiosInstance;
