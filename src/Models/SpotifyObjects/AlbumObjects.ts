import { ArtistObject, SimplifiedArtistObject } from "./ArtistObjects";
import { ImageObject } from "./SharedObjects";

enum AlbumType {
    album="album",
    single="single",
    compilation="compilation"
}

enum AlbumGroup {
    album="album",
    single="single",
    compilation="compilation",
    appears_on="appears_on",
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
    release_date: string
}

export interface SimplifiedAlbumObject {
    album_group: AlbumGroup
    album_type: AlbumType
    artists: SimplifiedArtistObject[]
    id: string
    images: ImageObject[]
    name: string
    release_date: string

}