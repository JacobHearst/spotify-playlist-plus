import { AudioFeaturesResponse } from "../Models/Responses/TrackResponses"
import axiosInstance from "./AxiosConfig"

const baseURL = "https://api.spotify.com/v1/audio-features"

export default class TrackEndpoints {
    static async getAudioFeatures(ids: string[]) {
        try {
            return axiosInstance.get<AudioFeaturesResponse>(`${baseURL}/?${ids.join(",")}`)
        } catch (error) {
            console.error(`Failed to get audio features for tracks with with ids: "${ids}".`)
            console.error(`Error: ${error}`)
        }
    }
}