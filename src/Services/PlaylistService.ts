import PlaylistService from "../Endpoints/Playlists"
import { PlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"

export async function getPlaylist(id: string): Promise<PlaylistObject | undefined> {
    const response = await PlaylistService.getPlaylistById(id)
    if (!response) {
        return
    }

    const tracks = response.data.tracks.items
    return {
        ...response.data,
        tracks
    }
}