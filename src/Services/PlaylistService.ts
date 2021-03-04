import PlaylistEndpoints from "../Endpoints/Playlists"
import { PlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"

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
}