import PlaylistEndpoints from "../Endpoints/Playlists"
import { PlaylistObject, SimplifiedPlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"

export default class PlaylistService {
    static async getPlaylist(id: string): Promise<PlaylistObject | undefined> {
        const response = await PlaylistEndpoints.getPlaylistById(id)
        if (!response) {
            return
        }

        const tracks = response.data.tracks.items
        return {
            ...response.data,
            tracks
        }
    }

    static async getUserPlaylistsList(): Promise<SimplifiedPlaylistObject[] | undefined> {
        try {
            const response = await PlaylistEndpoints.getCurrentUserPlaylists()
            return response.data.items
        } catch (error) {
            console.error(`Failed to get users current playlists. Error: ${error}`)
        }
    }
}