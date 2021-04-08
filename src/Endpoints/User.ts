import { AxiosResponse } from "axios"
import { CursorPaginated, Paginated } from "../Models/Responses/Shared"
import { SimplifiedPlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"
import { PublicUserObject } from "../Models/SpotifyObjects/SharedObjects"
import { SimplifiedTrackObject } from "../Models/SpotifyObjects/TrackObjects"
import axiosInstance from "./AxiosConfig"

const baseURL = "https://api.spotify.com/v1/me"

export default class UserEndpoints {
    static getRecentTracks(limit: number=20, after?: number, before?: number) {
        if (after && before) {
            console.error("Can't have both after and before specified.")
            return
        }

        let urlParams = `?limit=${limit}`
        if (after) urlParams += `&after=${after}`
        else if (before) urlParams += `&before=${before}`

        return axiosInstance.get<CursorPaginated<{ track: SimplifiedTrackObject }>>(`${baseURL}/player/recently-played${urlParams}`)
    }

    static getPlaylists(): Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>> {
        return axiosInstance.get<Paginated<SimplifiedPlaylistObject>>(`${baseURL}/playlists`)
    }

    static getCurrentUser() {
        return axiosInstance.get<PublicUserObject>(baseURL)
    }
}