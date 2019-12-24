import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});

/**
 * Middleware, to change whatever we need in the request
 * ex: Put a bearer token in the request, if necessary
 */

api.interceptors.request.use(
  async (config) => {
    const originalRequest = config;
    const token = 'xyz';

    try {
      originalRequest.Authorization = `Bearer ${token}`;
      return originalRequest;
    } catch (error) {
      // Error retrieving data
    }
    return config;
  },
  (err) => Promise.reject(err),
);

export default api;
