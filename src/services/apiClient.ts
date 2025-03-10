import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Esto usará el proxy configurado en vite.config.ts
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Si estás usando cookies para autenticación
});

export default apiClient;
