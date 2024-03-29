import axiosInstance from "./AxiosConfig"
import { ResponseItems, ResponseObjects } from "../Models/Custom"

const baseURL = "https://api.spotify.com/v1/search?"

export default class SearchEndpoints {
    static async GetSearchResults(query: string): Promise<Array<ResponseObjects>> {
        const url = baseURL + query
    
        let responseItems : Array<ResponseObjects> = []
    
        try {
            const response = await axiosInstance.get(url)
    
            // need to loop through and check each possible array of types that could be have returend 
            for (const i in response.data) {
                if (response.data[i as ResponseItems]) {
                    responseItems = responseItems.concat(response.data[i as ResponseItems]!.items)
                }
            }
        }
        catch {
            console.log("Cound't retrieve search results")
        }
    
        return responseItems
    }
}