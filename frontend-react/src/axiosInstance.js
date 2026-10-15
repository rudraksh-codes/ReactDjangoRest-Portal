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
        }
        return config; 
    }, 
    
    function(error){
        return Promise.reject(error);
    }
)


//response interceptor 
axiosInstance.interceptors.response.use(
    function(response){
        console.log(response)
        console.log(response.status)

        return response ; 
    }, 
    // handle 401 failed response
    async function(error){
        // what request gave originally
        const originalRequest = error.config; 
        if(error.response.status===401 && !originalRequest.retry){
            originalRequest.retry = true
            const refreshToken = localStorage.getItem("refreshToken")
            try{
                const response = await axios.post(
                "/token/refresh/",  
                {refresh : refreshToken}, 
                {baseURL}
            )
                localStorage.setItem("accessToken", response.data.access)
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest)
            
        }catch(error){
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            window.location.href = "/login/"
        } 



    }
    return Promise.reject(error)

}

)


export default axiosInstance; 