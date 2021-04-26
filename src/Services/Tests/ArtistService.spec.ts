import { AxiosResponse } from "axios"
import ArtistEndpoints from "../../Endpoints/Artists"
import { Paginated } from "../../Models/Responses/Shared"
import { SimplifiedAlbumObject } from "../../Models/SpotifyObjects/AlbumObjects"
import { ArtistObject } from "../../Models/SpotifyObjects/ArtistObjects"
import ArtistService from "../ArtistService"

describe("Artist service", () => {
    const mockArtist: ArtistObject = {
        href: "https://spotify.com",
        id: "myUserId",
        images: [],
        genres: ["Genre1", "Genre2"],
        name: "Test Artist",
        popularity: 1,
        uri: ":spotify:uri:asdfav"
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

            const playlistPromise = new Promise<AxiosResponse<ArtistObject>>((resolve) => {
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

    describe("getArtistAlbums", () => {
        it("should return an array of simplified album objects", (done) => {
            const paginatedAlbums: Paginated<SimplifiedAlbumObject> = {
                items: [
                    { name: "mockAlbum1" },
                    { name: "mockAlbum2" },
                ] as SimplifiedAlbumObject[]
            } as Paginated<SimplifiedAlbumObject>

            const mockAxiosAlbumResponse = { data: paginatedAlbums } as AxiosResponse<Paginated<SimplifiedAlbumObject>>
            const albumPromise = new Promise<AxiosResponse<Paginated<SimplifiedAlbumObject>>>((resolve) => resolve(mockAxiosAlbumResponse))
            ArtistEndpoints.getArtistAlbums = jest.fn(_ => albumPromise)

            ArtistService.getArtistAlbums(mockArtist.id).then(albums => {
                expect(albums).toBe(paginatedAlbums.items)
                done()
            })
        })

        it("should log an error and return undefined if an error occurs", (done) => {
            const mockPromise = new Promise<AxiosResponse<Paginated<SimplifiedAlbumObject>>>((_, reject) => reject())
            console.error = jest.fn()
            ArtistEndpoints.getArtistAlbums = jest.fn(_ => mockPromise)
            ArtistService.getArtistAlbums(mockArtist.id).then(albums => {
                expect(albums).toBeUndefined()
                expect(console.error).toBeCalled()
                done()
            })
        })
    })
})