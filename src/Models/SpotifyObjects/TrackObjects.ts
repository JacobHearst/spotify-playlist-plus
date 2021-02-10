import { SimplifiedAlbumObject } from "./AlbumObjects";
import { ArtistObject } from "./ArtistObjects";

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
}