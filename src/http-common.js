import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3232',
  headers: {
    'Content-type': 'application/json'
  }
});
