import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Set this to your Laravel API base URL
  withCredentials: true, // Required for Sanctum
});

export default axiosInstance;