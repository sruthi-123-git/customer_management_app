// src/api/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5001/api', // your backend base URL and API prefix
});

