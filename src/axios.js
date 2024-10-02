///////ЗАПРОСЫ НА СЕРВЕР/////////
import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:4444`,
});


instance.interceptors.request.use(config => {
    // Retrieve the access token from React state or a state management system
    const token = localStorage.getItem("token");;

    // Add the access token to the Authorization header
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});
export default instance;