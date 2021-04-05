import { SimplifiedAlbumObject } from "./AlbumObjects";
import { ArtistObject, SimplifiedArtistObject } from "./ArtistObjects";

/**
 * Response objects that match the Spotify Tracks API
 */

export interface TrackObject {
    album?: SimplifiedAlbumObject
    artists: ArtistObject[]
    duration_ms: number
    explicit: boolean
    href: string
    id: string
    is_playable: boolean
    name: string
    popularity: number
    track_number: number
    uri: string
}

export interface SimplifiedTrackObject {
    artists: SimplifiedArtistObject[]
    duration_ms: number
    explicit: boolean
    href: string
    id: string
    is_playable: boolean
    name: string
    preview_url: string
    uri: string
}