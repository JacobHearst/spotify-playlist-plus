import axios from "axios"
import { AuthenticationContextObject } from "../Models/Authentication"

const axiosInstance = axios.create({})

// set authorization header so that we don't have to specify it with every request
export function initAxios(context: AuthenticationContextObject) {
    axiosInstance.defaults.headers.common['Authorization'] = context.authObj.access_token
}

// default error handling for responses
axiosInstance.interceptors.response.use((response) => {return response}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

export default axiosInstance