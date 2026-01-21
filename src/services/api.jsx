import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const checkConnection = async () => {
    try {
        const response = await api.get('/test');
        return response.data;
    } catch (error) {
        console.error('Error connecting to backend:', error);
        throw error;
    }
};
