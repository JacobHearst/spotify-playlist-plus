import { PlaylistTrackObject } from "../SpotifyObjects/PlaylistObjects";
import { ImageObject, PublicUserObject } from "../SpotifyObjects/SharedObjects";
import { Paginated } from "./Shared";

export interface GetPlaylistResponse {
    description: string
    href: string
    id: string
    images: ImageObject[]
    name: string
    owner: PublicUserObject
    public: boolean
    tracks: Paginated<PlaylistTrackObject>
}