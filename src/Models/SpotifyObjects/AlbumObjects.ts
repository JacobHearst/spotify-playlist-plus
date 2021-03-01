import { ArtistObject, SimplifiedArtistObject } from "./ArtistObjects";
import { ImageObject } from "./SharedObjects";
import { TrackObject } from "./TrackObjects"

export enum AlbumType {
    Album="album",
    Single="single",
    Compilation="compilation"
}

enum AlbumGroup {
    Album="album",
    Single="single",
    Compilation="compilation",
    AppearsOn="appears_on",
}

/**
 * Response objects that match the Spotify Albums API
 */

export interface AlbumObject {
    album_type: AlbumType
    artists: ArtistObject[]
    genres: string[]
    href: string
    id: string
    images: ImageObject[]
    label: string
    name: string
    popularity: number
    tracks: TrackObject[]
    release_date: string
    uri: string
}

export interface SimplifiedAlbumObject {
    album_group: AlbumGroup
    album_type: AlbumType
    artists: SimplifiedArtistObject[]
    id: string
    images: ImageObject[]
    name: string
    release_date: string
    uri: string
}