import TrackEndpoints from "../Endpoints/Track"
import { AudioFeaturesObject, TrackObject } from "../Models/SpotifyObjects/TrackObjects"

export default class TrackService {
    static async getAudioFeatures(tracks: TrackObject[]): Promise<AudioFeaturesObject[] | undefined> {
        let trackIds = tracks.map(({ id }) => id)
        if (trackIds.length > 100) {
            trackIds = trackIds.slice(0, 100)
        }
        
        const response = await TrackEndpoints.getAudioFeatures(trackIds)
        return response?.data.audio_features
    }
}