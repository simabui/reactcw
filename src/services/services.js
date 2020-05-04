import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const sendRequest = data =>
  axios.post(`https://postman-echo.com/get?foo1=bar1&foo2=bar2`, data);

export const getRequest = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);

export const getUserRequest = id =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
// debounce
