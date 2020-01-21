import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-kate.firebaseio.com/'
});

export default instance;
