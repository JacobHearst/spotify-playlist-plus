import { ArtistObject } from "../SpotifyObjects/ArtistObjects"
import { SimplifiedAlbumObject } from "../SpotifyObjects/AlbumObjects"
import { TrackObject } from "../SpotifyObjects/TrackObjects"
import { SimplifiedPlaylistObject } from "../SpotifyObjects/PlaylistObjects"

export interface Paginated<T> {
    items: T[]
    limit: number
    offset: number
    total: number
}

export interface SearchResponse {
    artists?: Paginated<ArtistObject>
    albums?: Paginated<SimplifiedAlbumObject>
    tracks?: Paginated<TrackObject>
    playlists?: Paginated<SimplifiedPlaylistObject>
}