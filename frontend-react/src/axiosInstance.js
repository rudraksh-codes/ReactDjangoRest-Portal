import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create(
    {
        baseURL : baseURL, 
        headers : {
            "Content-Type" : "application/json"
        }
    }
)
//request interceptor
axiosInstance.interceptors.request.use(
    function(config){ 
        const token = localStorage.getItem("accessToken")
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
            console.log("from config",  config)
        }
        return config; 
    }, 
    
    function(error){
        return Promise.reject(error);
    }
)


export default axiosInstance; 