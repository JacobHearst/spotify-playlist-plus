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
}

export interface PlaylistTrackObject extends TrackObject {
    added_at: string
    track: TrackObject
}