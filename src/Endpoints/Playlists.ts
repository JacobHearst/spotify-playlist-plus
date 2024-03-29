import { AxiosResponse } from "axios"
import { GetPlaylistResponse } from "../Models/Responses/PlaylistResponses"
import { Paginated } from "../Models/Responses/Shared"
import { PlaylistObject, SimplifiedPlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"
import axiosInstance from "./AxiosConfig"

const baseURL = "https://api.spotify.com/v1/playlists"

export default class PlaylistEndpoints {
    static getPlaylistById(id: string) {
        return axiosInstance.get<GetPlaylistResponse>(`${baseURL}/${id}`)
    }

    static getCurrentUserPlaylists(): Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>> {
        return axiosInstance.get<Paginated<SimplifiedPlaylistObject>>("https://api.spotify.com/v1/me/playlists")
    }

    static createPlaylist(name: string, userId: string) {
        return axiosInstance.post<PlaylistObject>(`https://api.spotify.com/v1/users/${userId}/playlists`, { name })
    }
}