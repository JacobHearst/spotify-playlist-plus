import UserEndpoints from "../Endpoints/User"
import { SimplifiedPlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"
import { SimplifiedTrackObject } from "../Models/SpotifyObjects/TrackObjects"

export default class UserService {
    static async getRecentTracks(limit: number=20, after?: number, before?: number): Promise<SimplifiedTrackObject[]> {
        try {
            const response = await UserEndpoints.getRecentTracks(limit, after, before)
            if (response) {
                return response.data.items.map(({ track }) => {
                    return track
                })
            }

            return []
        } catch (error) {
            console.error(error)
            return []
        }
    }

    static async getPlaylists(): Promise<SimplifiedPlaylistObject[] | undefined> {
        return UserEndpoints.getPlaylists()
            .then(({ data: { items }}) => items)
            .catch(error => {
                console.error(`Failed to get users current playlists. Error: ${error}`)
                return undefined
            })
    }
}