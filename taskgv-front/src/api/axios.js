import axios from 'axios';
// const BASE_URL = 'http://localhost:5000/api';

export default axios.create({
    baseURL: process.env.BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});