import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-laravel-app.com/api',
    withCredentials: true,
});

export const SignIn = async (credentials) => {
    const response = await api.post('/SignIn', credentials);
    return response.data;
};

export const getUser = async () => {
    const response = await api.get('/user');
    return response.data;
};

export const getRoleSpecificData = async () => {
    const response = await api.get('/role-data');
    return response.data;
};

export default api;
