import Axios from 'axios';

const INSTANCE = Axios.create();

INSTANCE.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error.response);
    if (error.response) return Promise.reject(error.response);
    return Promise.reject(error);
  },
);

export default INSTANCE;
