import axios from 'axios';

export const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_RENDER,
});

export const SetAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};
