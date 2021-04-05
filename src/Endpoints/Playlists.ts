import { AxiosResponse } from "axios"
import { GetPlaylistResponse } from "../Models/Responses/PlaylistResponses"
import { Paginated } from "../Models/Responses/Shared"
import { SimplifiedPlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"
import axiosInstance from "./AxiosConfig"

const baseURL = "https://api.spotify.com/v1/playlists"

export default class PlaylistEndpoints {
    static getPlaylistById(id: string) {
        try {
            return axiosInstance.get<GetPlaylistResponse>(`${baseURL}/${id}`)
        } catch (error) {
            console.error(`Failed to get playlist with id: "${id}". Error: ${error}`)
        }
    }

    static getCurrentUserPlaylists(): Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>> {
        return axiosInstance.get<Paginated<SimplifiedPlaylistObject>>("https://api.spotify.com/v1/me/playlists")
    }
}