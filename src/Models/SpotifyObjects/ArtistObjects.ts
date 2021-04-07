/**
 * Response objects that match the Spotify Artist API
 */

import { ImageObject } from "./SharedObjects";

export interface SimplifiedArtistObject {
    href: string
    id: string
    name: string
}
export interface ArtistObject extends SimplifiedArtistObject {
    genres: string[]
    images: ImageObject[]
    popularity: number
    uri: string
}