import { GetPlaylistResponse } from "../Models/Responses/PlaylistResponses"
import axiosInstance from "./AxiosConfig"

const baseURL = "https://api.spotify.com/v1/playlists"

export async function getPlaylistById(id: string) {
    try {
        return axiosInstance.get<GetPlaylistResponse>(`${baseURL}/${id}`)
    } catch (error) {
        console.error(`Failed to get playlist with id: "${id}". Error: ${error}`)
    }
}