/**
 * Response objects that match the Spotify Artist API
 */

import { ImageObject } from "./SharedObjects";

export interface ArtistObject {
    genres: string[]
    href: string
    id: string
    images: ImageObject[]
    name: string
    popularity: number
    uri: string
}

export interface SimplifiedArtistObject {
    href: string
    id: string
    name: string
}