import { Tracing } from "trace_events";
import { ImageObject, PublicUserObject } from "./SharedObjects";
import { TrackObject } from "./TrackObjects";

/**
 * Response objects that match the Spotify Playlist API
 */

export interface PlaylistObject {
    description: string
    href: string
    id: string
    images: ImageObject[]
    name: string
    owner: PublicUserObject
    public: boolean
    tracks: PlaylistTrackObject[]
    uri: string
}

export interface PlaylistTrackObject {
    added_at: string,
    added_by: PublicUserObject,
    track: TrackObject
}