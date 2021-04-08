import PlaylistEndpoints from "../Endpoints/Playlists"
import UserEndpoints from "../Endpoints/User"
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

    static async createPlaylist(name: string) {
        const currentUser = await UserEndpoints.getCurrentUser()
        return PlaylistEndpoints.createPlaylist(name, currentUser.data.id)
            .then((response) => response.data)
            .catch((error) => {
                console.error(`Couldn't create playlist: '${name}'. Error: ${error}`)
                return undefined
            })
    }
}