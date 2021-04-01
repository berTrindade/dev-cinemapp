import axios from 'axios'
require('dotenv').config();

const API_KEY = process.env.OMDB_API_KEY;

const api = axios.create({
    baseURL: 'http://omdbapi.com',
    params: { apikey: API_KEY }
})

export default api;