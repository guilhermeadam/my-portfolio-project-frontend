import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-adam.herokuapp.com/api'
})

export default api;