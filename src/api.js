import axios from 'axios';
import store from './store/index'

const $axios = axios.create({
  baseURL: 'https://dch.doscom.org/api/',
  headers: {
      'Content-Type': 'application/json'
  }
});

$axios.interceptors.request.use (
  function (config) {
      const token = store.state.token
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
  },
  function (error) {
      return Promise.reject (error);
  }
);


export default $axios;