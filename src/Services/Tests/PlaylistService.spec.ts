import { AxiosResponse } from "axios"
import PlaylistEndpoints from "../../Endpoints/Playlists"
import { GetPlaylistResponse } from "../../Models/Responses/PlaylistResponses"
import { Paginated } from "../../Models/Responses/Shared"
import { PlaylistObject, PlaylistTrackObject, SimplifiedPlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import { PublicUserObject } from "../../Models/SpotifyObjects/SharedObjects"
import { TrackObject } from "../../Models/SpotifyObjects/TrackObjects"
import PlaylistService from "../PlaylistService"

describe("Playlist service", () => {
    const mockUser: PublicUserObject = {
        href: "https://spotify.com",
        id: "myUserId",
        images: [],
        display_name: "My User"
    }

    const mockTrack: PlaylistTrackObject = {
        added_at: "02/22/2021", // I don"t know if this is actually the date format
        added_by: mockUser,
        track: {
            id: "myId"
        } as TrackObject
    }
    const mockPlaylistResponse: GetPlaylistResponse = {
        description: "My description",
        href: "https://spotify.com/",
        id: "myPlaylistId",
        images: [],
        name: "My Playlist",
        owner: mockUser,
        public: true,
        uri: ":spotify:uri:asdfasdf",
        tracks: {
            href: "someHref",
            items: [mockTrack],
            limit: 100,
            offset: 0,
            total: 50
        }
    }

    describe("getPlaylist", () => {
        it("should return a PlaylistObject", (done) => {
            const mockAxiosResponse: AxiosResponse<GetPlaylistResponse> = {
                data: mockPlaylistResponse,
                status: 200,
                statusText: "OK",
                headers: {},
                config: {},
            }

            const playlistPromise = new Promise<AxiosResponse<GetPlaylistResponse>>((resolve, reject) => {
                resolve(mockAxiosResponse)
            })
            PlaylistEndpoints.getPlaylistById = jest.fn(_ => playlistPromise)

            const expectedPlaylist: PlaylistObject = {
                ...mockPlaylistResponse,
                tracks: [mockTrack]
            }

            PlaylistService.getPlaylist(mockPlaylistResponse.id).then(playlist => {
                expect(playlist).toMatchObject(expectedPlaylist)
                done()
            })
        })

        it("should log an error and return undefined if an error occurs", (done) => {
            const mockPromise = new Promise<AxiosResponse<GetPlaylistResponse>>((_, reject) => reject())
            console.error = jest.fn()
            PlaylistEndpoints.getPlaylistById = jest.fn(_ => mockPromise)
            PlaylistService.getPlaylist(mockPlaylistResponse.id).then(playlist => {
                expect(playlist).toBeUndefined()
                expect(console.error).toBeCalled()
                done()
            })
        })
    })

    describe("getUserPlaylistsList", () => {
        it("should return a list of the users playlists as simplified playlist objects", (done) => {
            const mockResponse: AxiosResponse<Paginated<SimplifiedPlaylistObject>> = {
                data: {
                    items: [
                        { id: "mockPlaylist1" }, { id: "mockPlaylist2" }
                    ] as SimplifiedPlaylistObject[]
                } as Paginated<SimplifiedPlaylistObject>
            } as AxiosResponse<Paginated<SimplifiedPlaylistObject>>

            const mockPromise = new Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>>((resolve) => resolve(mockResponse))
            PlaylistEndpoints.getCurrentUserPlaylists = jest.fn(() => mockPromise)
            PlaylistService.getUserPlaylistsList().then(playlists => {
                expect(playlists).toEqual(mockResponse.data.items)
                done()
            })
        })

        it("should log an error and return undefined if an error occurs", (done) => {
            const mockPromise = new Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>>((_, reject) => reject())
            console.error = jest.fn()
            PlaylistEndpoints.getCurrentUserPlaylists = jest.fn(() => mockPromise)
            PlaylistService.getUserPlaylistsList().then(playlists => {
                expect(playlists).toBeUndefined()
                expect(console.error).toBeCalled()
                done()
            })
        })
    })
})