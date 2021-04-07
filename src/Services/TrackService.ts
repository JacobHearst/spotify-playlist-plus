import TrackEndpoints from "../Endpoints/Track"
import { AudioFeaturesObject, TrackObject } from "../Models/SpotifyObjects/TrackObjects"

export default class TrackService {
    static async getAudioFeatures(tracks: TrackObject[]): Promise<AudioFeaturesObject[]> {
        let trackIds = tracks.map(({ id }) => id)
        if (trackIds.length > 100) {
            trackIds = trackIds.slice(0, 100)
        }
        
        try {
            const response = await TrackEndpoints.getAudioFeatures(trackIds)
            if (!response) {
                return []
            }

            return response.data.audio_features
        } catch {
            return []
        }
    }

    static async intensitySort(tracks: TrackObject[], decreasing: boolean): Promise<TrackObject[]> {
        let audioFeatures: AudioFeaturesObject[] = []
        try {
            audioFeatures = await TrackService.getAudioFeatures(tracks)
        } catch (error) {
            console.error(`Error getting audio features: ${error}`)
            return []
        }

        const sorted = audioFeatures.sort((a, b) => a.energy - b.energy)
        if (decreasing) {
            sorted.reverse()
        }

        const getTrackFromFeature = ({ id }: AudioFeaturesObject) => tracks.find((track) => track.id == id)

        return sorted
            .map((feature) => getTrackFromFeature(feature))
            // This filter removes all undefined values. Linting doesn't know that so it complains
            .filter((track) => !!track) as TrackObject[]
    }
}