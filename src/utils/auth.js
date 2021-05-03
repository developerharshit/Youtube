import { api } from '../api'

const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password })
        const token = response.data.data
        localStorage.setItem('token', token)
    }
    catch (err) {
        if (err.response && err.response.status === 400) {
            console.log(err.response.data.message);
        }
    }
}

export default {
    login
}