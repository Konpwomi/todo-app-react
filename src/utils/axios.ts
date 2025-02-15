import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://65a25d5942ecd7d7f0a77211.mockapi.io'
})

export default axiosInstance;