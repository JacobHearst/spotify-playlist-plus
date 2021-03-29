import { AxiosResponse } from "axios"
import TrackEndpoints from "../../Endpoints/Track"
import { AudioFeaturesResponse } from "../../Models/Responses/TrackResponses"
import { AudioFeaturesObject, TrackObject } from "../../Models/SpotifyObjects/TrackObjects"
import TrackService from "../TrackService"

describe("Track Service", () => {
    const mockTrack: TrackObject = {
        artists: [],
        duration_ms: 1000,
        explicit: false,
        href: "spotify.com",
        id: "mockTrack",
        is_playable: true,
        name: "Mock Track",
        popularity: 1,
        track_number: 1,
        uri: ":spotify:uri:abc123",
    }

    describe("getAudioFeatures", () => {
        const mockFeatures: AudioFeaturesObject = {
            acousticness: 0.25,
            analysis_url: "spotify",
            danceability: .9,
            duration_ms: 1000,
            energy: .9,
            id: "mockTrack",
            instrumentalness: 0,
            key: 4,
            liveness: 0,
            loudness: 0.7,
            mode: 1,
            speechiness: 0,
            tempo: 4,
            time_signature: 5,
            uri: ":spotify:uri:al568ru",
            valence: 0.5
        }

        it("should return an array of AudioFeaturesObjects", (done) => {
            const mockAxiosResponse: AxiosResponse<AudioFeaturesResponse> = {
                data: { audio_features: [mockFeatures] },
                status: 200,
                statusText: "OK",
                headers: {},
                config: {},
            }

            const featuresPromise = new Promise<AxiosResponse<AudioFeaturesResponse>>((resolve, reject) => {
                resolve(mockAxiosResponse)
            })
            TrackEndpoints.getAudioFeatures = jest.fn((_: string[]) => featuresPromise)

            TrackService.getAudioFeatures([mockTrack]).then(audioFeatures => {
                expect(TrackEndpoints.getAudioFeatures).toHaveBeenCalledTimes(1)
                expect(TrackEndpoints.getAudioFeatures).toHaveBeenCalledWith([mockTrack.id])

                expect(audioFeatures).toBeDefined()
                expect(audioFeatures).toHaveLength(1)
                expect(audioFeatures![0]).toBe(mockFeatures)
                done()
            })
        })

        it("should return an empty array if an error occurs", (done) => {
            const featuresPromise = new Promise<AxiosResponse<AudioFeaturesResponse>>((_, reject) => {
                reject()
            })

            TrackEndpoints.getAudioFeatures = jest.fn((_: string[]) => featuresPromise)
            TrackService.getAudioFeatures([mockTrack]).then(audioFeatures => {
                expect(TrackEndpoints.getAudioFeatures).toHaveBeenCalledTimes(1)
                expect(TrackEndpoints.getAudioFeatures).toHaveBeenCalledWith([mockTrack.id])
                expect(audioFeatures).toHaveLength(0)
                done()
            })
        })
    })

    describe("intensitySort", () => {
        const highId = "highestIntensity"
        const middleId = "middleIntensity"
        const lowId = "lowestIntensity"

        const mockTracks = [
            { id: highId },
            { id: middleId },
            { id: lowId }
        ] as TrackObject[]

        const mockFeatures = [
            { energy: 1, id: highId },
            { energy: 0.5, id: middleId },
            { energy: 0, id: lowId }
        ] as AudioFeaturesObject[]

        const mockAxiosResponse = {
            data: { audio_features: mockFeatures },
            status: 200,
            statusText: "OK",
            headers: {},
            config: {},
        }

        const successfulFeaturesPromise = new Promise<AxiosResponse<AudioFeaturesResponse>>((resolve, _) => {
            resolve(mockAxiosResponse)
        })

        it("should properly sort an array of tracks into ascending order", (done) => {
            TrackEndpoints.getAudioFeatures = jest.fn(_ => successfulFeaturesPromise)

            TrackService.intensitySort(mockTracks, false).then((tracks) => {
                expect(tracks).toHaveLength(3)
                expect(tracks[0].id).toBe(lowId)
                expect(tracks[1].id).toBe(middleId)
                expect(tracks[2].id).toBe(highId)
                done()
            })
        })

        it("should properly sort an array of tracks into descending order", (done) => {
            TrackEndpoints.getAudioFeatures = jest.fn(_ => successfulFeaturesPromise)

            TrackService.intensitySort(mockTracks, true).then((tracks) => {
                expect(tracks).toHaveLength(3)
                expect(tracks[0].id).toBe(highId)
                expect(tracks[1].id).toBe(middleId)
                expect(tracks[2].id).toBe(lowId)
                done()
            })
        })

        it("should return an empty array when it fails to get audio features", (done) => {
            const failedPromise = new Promise<AxiosResponse<AudioFeaturesResponse>>((_, reject) => {
                reject()
            })

            TrackEndpoints.getAudioFeatures = jest.fn(_ => failedPromise)

            TrackService.intensitySort(mockTracks, false).then((tracks) => {
                expect(tracks).toHaveLength(0)
                done()
            })
        })
    })
})