import axios from 'axios';

export const API_KEY = 'kDHXJKG9z6nG74AdUyg7sG4BMVn2lhzgV7ta7ruz';

export const API_HEADERS = {
    // 'Content-Type': 'application/json;charset=utf-8',
    // 'Accept': 'application/json, text/plain, */*',
    // 'Access-Control-Allow-Origin': '*',
    // "x-apikey": API_KEY,
};

export const api = axios.create({
  headers: API_HEADERS,
  baseURL: 'https://api.nasa.gov'
});
