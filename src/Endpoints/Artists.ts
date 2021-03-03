import { ArtistObject } from "../Models/SpotifyObjects/ArtistObjects"
import axiosInstance from "./AxiosConfig"

const baseURL = "https://api.spotify.com/v1/artists"

export default class ArtistEndpoints {
    static getArtistById(id: string) {
        try {
            return axiosInstance.get<ArtistObject>(`${baseURL}/${id}`)
        } catch (error) {
            console.error(`Failed to get artist with id: "${id}". Error: ${error}`)
        }
    }
}