import axios from "axios"
import { AuthToken } from "../Models/Authentication"

const axiosInstance = axios.create({})

// set authorization header so that we don't have to specify it with every request
export function initAxios(token: AuthToken) {
    if (token) {
        axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token.access_token
    }
}

// default error handling for responses
axiosInstance.interceptors.response.use((response) => {return response}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

// generic get request to any url provided
export async function getRequest(url: string): Promise<any> {
    return await axiosInstance.get(url)
}

export default axiosInstance
