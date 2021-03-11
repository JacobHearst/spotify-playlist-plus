import { DeviceObject, ContextObject } from "../SpotifyObjects/SharedObjects"

export interface GetPlaybackInfoResponse {
    timestamp: number,
    device: DeviceObject,
    progress_ms: string,
    is_playing: boolean,
    currently_playing_type: string,
    item: any,
    shuffle_state: boolean,
    repeat_state: boolean,
    context: ContextObject
}