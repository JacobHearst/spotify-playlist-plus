import { AxiosResponse } from "axios"
import UserEndpoints from "../../Endpoints/User"
import { GetPlaylistResponse } from "../../Models/Responses/PlaylistResponses"
import { Paginated } from "../../Models/Responses/Shared"
import { PlaylistTrackObject, SimplifiedPlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import { PublicUserObject } from "../../Models/SpotifyObjects/SharedObjects"
import { TrackObject } from "../../Models/SpotifyObjects/TrackObjects"
import UserService from "../UserService"

describe("User service", () => {
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

    describe("getPlaylists", () => {
        it("should return a list of the users playlists as simplified playlist objects", (done) => {
            const mockResponse: AxiosResponse<Paginated<SimplifiedPlaylistObject>> = {
                data: {
                    items: [
                        { id: "mockPlaylist1" }, { id: "mockPlaylist2" }
                    ] as SimplifiedPlaylistObject[]
                } as Paginated<SimplifiedPlaylistObject>
            } as AxiosResponse<Paginated<SimplifiedPlaylistObject>>

            const mockPromise = new Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>>((resolve) => resolve(mockResponse))
            UserEndpoints.getPlaylists = jest.fn(() => mockPromise)
            UserService.getPlaylists().then(playlists => {
                expect(playlists).toEqual(mockResponse.data.items)
                done()
            })
        })

        it("should log an error and return undefined if an error occurs", (done) => {
            const mockPromise = new Promise<AxiosResponse<Paginated<SimplifiedPlaylistObject>>>((_, reject) => reject())
            console.error = jest.fn()
            UserEndpoints.getPlaylists = jest.fn(() => mockPromise)
            UserService.getPlaylists().then(playlists => {
                expect(playlists).toBeUndefined()
                expect(console.error).toBeCalled()
                done()
            })
        })
    })
})