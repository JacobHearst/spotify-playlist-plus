import { AxiosResponse } from "axios"
import PlaylistEndpoints from "../../Endpoints/Playlists"
import UserEndpoints from "../../Endpoints/User"
import { GetPlaylistResponse } from "../../Models/Responses/PlaylistResponses"
import { PlaylistObject, PlaylistTrackObject } from "../../Models/SpotifyObjects/PlaylistObjects"
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

    const mockPlaylist: PlaylistObject = {
        description: "My description",
        href: "https://spotify.com/",
        id: "myPlaylistId",
        images: [],
        name: "My Playlist",
        owner: mockUser,
        public: true,
        uri: ":spotify:uri:asdfasdf",
        tracks: []
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

            const playlistPromise = new Promise<AxiosResponse<GetPlaylistResponse>>((resolve) => {
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

    describe("createPlaylist", () => {
        it("should return a PlaylistObject", (done) => {
            const mockAxiosPlaylistResponse: AxiosResponse<PlaylistObject> = { data: mockPlaylist } as AxiosResponse<PlaylistObject>
            const playlistPromise = new Promise<AxiosResponse<PlaylistObject>>((resolve) => resolve(mockAxiosPlaylistResponse))
            PlaylistEndpoints.createPlaylist = jest.fn(_ => playlistPromise)

            const mockAxiosUserResponse: AxiosResponse<PublicUserObject> = { data: mockUser } as AxiosResponse<PublicUserObject>
            const userPromise = new Promise<AxiosResponse<PublicUserObject>>((resolve) => resolve(mockAxiosUserResponse))
            UserEndpoints.getCurrentUser = jest.fn(()  => userPromise)

            PlaylistService.createPlaylist(mockPlaylistResponse.id).then(playlist => {
                expect(playlist).toMatchObject(mockPlaylist)
                done()
            })
        })

        it("should log an error and return undefined if an error occurs", (done) => {
            const mockAxiosUserResponse: AxiosResponse<PublicUserObject> = { data: mockUser } as AxiosResponse<PublicUserObject>
            const userPromise = new Promise<AxiosResponse<PublicUserObject>>((resolve) => resolve(mockAxiosUserResponse))
            UserEndpoints.getCurrentUser = jest.fn(() => userPromise)

            const mockPromise = new Promise<AxiosResponse<PlaylistObject>>((_, reject) => reject())
            PlaylistEndpoints.createPlaylist = jest.fn(_ => mockPromise)

            console.error = jest.fn()

            PlaylistService.createPlaylist(mockPlaylistResponse.name).then(playlist => {
                expect(playlist).toBeUndefined()
                expect(console.error).toBeCalled()
                done()
            })
        })
    })
})