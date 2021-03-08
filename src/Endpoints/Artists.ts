import { ArtistObject } from "../Models/SpotifyObjects/ArtistObjects"
import { TrackObject } from "../Models/SpotifyObjects/TrackObjects"
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

    static getArtistTopTracks(id: string) {
        try {
            // Hardcoding US market here because this is for a school project and I don't anticipate non-us spotify users using this
            return axiosInstance.get<{ tracks: TrackObject[] }>(`${baseURL}/${id}/top-tracks?market=US`)
        } catch (error) {
            console.error(`Failed to get top tracks for artist with id: "${id}. Error: ${error}`)
        }
    }
}