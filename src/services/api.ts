import axios from 'axios';

const baseURL = process.env.REACT_APP_API_HOST;

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

export default api;
