import axios from 'axios';

const api = axios.create({
    baseURL: 'https://projetoodsunifacs.onrender.com'
})

export default api;