import { AxiosResponse } from "axios"
import ArtistEndpoints from "../../Endpoints/Artists"
import { ArtistObject } from "../../Models/SpotifyObjects/ArtistObjects"
import ArtistService from "../ArtistService"

describe("Artist service", () => {
    const mockArtist: ArtistObject = {
        href: "https://spotify.com",
        id: "myUserId",
        images: [],
        genres: ["Genre1", "Genre2"],
        name: "Test Artist",
        popularity: 1
    }

    describe("getArtist", () => {
        it("Returns a ArtistObject", (done) => {
            const mockAxiosResponse: AxiosResponse<ArtistObject> = {
                data: mockArtist,
                status: 200,
                statusText: "OK",
                headers: {},
                config: {},
            }

            const playlistPromise = new Promise<AxiosResponse<ArtistObject>>((resolve, reject) => {
                resolve(mockAxiosResponse)
            })
            ArtistEndpoints.getArtistById = jest.fn(_ => playlistPromise)

            ArtistService.getArtist(mockArtist.id).then(artist => {
                expect(artist).toMatchObject(mockArtist)
                done()
            })
        })

        it("Returns undefined if it doesn't get a response", (done) => {
            ArtistEndpoints.getArtistById = jest.fn(_ => undefined)
            ArtistService.getArtist(mockArtist.id).then(playlist => {
                expect(playlist).toBeUndefined()
                done()
            })
        })
    })
})