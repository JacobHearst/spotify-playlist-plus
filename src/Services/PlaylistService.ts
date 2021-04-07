import PlaylistEndpoints from "../Endpoints/Playlists"
import { PlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"

export default class PlaylistService {
    static async getPlaylist(id: string): Promise<PlaylistObject | undefined> {
        return PlaylistEndpoints.getPlaylistById(id)
            .then((response) => {
                const tracks = response.data.tracks.items
                return {
                    ...response.data,
                    tracks
                }
            })
            .catch((error) => {
                console.error(`Failed to get playlist with id: '${id}'. Error: ${error}`)
                return undefined
            })
    }
}