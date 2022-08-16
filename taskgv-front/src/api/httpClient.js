/* eslint-disable no-undef */
import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

// const httpRequest = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });

export default httpRequest
