import axiosInstance from "./AxiosConfig"
import { SearchResponse } from "../Models/Responses/Shared"


const baseURL = "https://api.spotify.com/v1/search?"

export async function GetSearchResults(query: string): Promise<SearchResponse> {
    const url = baseURL + query

    const response = await axiosInstance.get(url)
    return response.data as SearchResponse
}