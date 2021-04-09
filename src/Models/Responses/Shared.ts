import { ArtistObject } from "../SpotifyObjects/ArtistObjects"
import { SimplifiedAlbumObject } from "../SpotifyObjects/AlbumObjects"
import { TrackObject } from "../SpotifyObjects/TrackObjects"
import { SimplifiedPlaylistObject } from "../SpotifyObjects/PlaylistObjects"

export interface Paginated<T> {
    href: string
    items: T[]
    limit: number
    next?: string
    offset: number
    previous?: string
    total: number
}

export interface SearchResponse {
    artists?: Paginated<ArtistObject>
    albums?: Paginated<SimplifiedAlbumObject>
    tracks?: Paginated<TrackObject>
    playlists?: Paginated<SimplifiedPlaylistObject>
}

export interface CursorPaginated<T> {
    cursors: CursorObject
    href: string
    items: T[]
    limit: number
    next: string
    total: number
}

export interface CursorObject {
    after: string   
}