import axios from 'axios';

export const endpoint = process.env.REACT_APP_SERVER_URI;

const client = axios.create ();

client.interceptors.request.use(
    async config => {
      config.headers = { 
        'Authorization': `${localStorage.token}`,
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });

export default client;
