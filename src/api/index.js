import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_BE,
    headers: {
        Authorization: process.env.REACT_APP_KEY
    }
})