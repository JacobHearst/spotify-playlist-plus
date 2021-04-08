import { ResponseObjects } from "../Models/Custom"
import { SimplifiedAlbumObject } from "../Models/SpotifyObjects/AlbumObjects"
import { ArtistObject } from "../Models/SpotifyObjects/ArtistObjects"
import { SimplifiedPlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"
import { TrackObject } from "../Models/SpotifyObjects/TrackObjects"

export function createQuery(searchVal: string, types: string[]): string {
    let query = `q=${searchVal}`

    if (types.length > 0) {
        const typeQuery = "&type=" + types.join(",")
        query += typeQuery
    }

    return query
}

// instanceof only works for classes so apparently this is the best way to test for interface types # rip
export function getType(item: ResponseObjects): string {
    if ((item as SimplifiedAlbumObject).album_type) {
        return "Album"
    } else if ((item as ArtistObject).genres) {
        return "Artist"
    } else if ((item as SimplifiedPlaylistObject).tracks) {
        return "Playlist"
    } else if ((item as TrackObject).track_number) {
        return "Track"
    }

    return "FuNcTiOn lAcKs EnDiENg ReTuRn sTaTeMeNt"
}