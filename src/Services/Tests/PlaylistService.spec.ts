import { AxiosResponse } from "axios"
import PlaylistService from "../../Endpoints/Playlists"
import { GetPlaylistResponse } from "../../Models/Responses/PlaylistResponses"
import { PlaylistObject, PlaylistTrackObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import { PublicUserObject } from "../../Models/SpotifyObjects/SharedObjects"
import { TrackObject } from "../../Models/SpotifyObjects/TrackObjects"
import { getPlaylist } from "../PlaylistService"

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
        tracks: {
            items: [mockTrack],
            limit: 100,
            offset: 0,
            total: 50
        }
    }

    describe("getPlaylist", () => {
        it("Returns a PlaylistObject", (done) => {
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
            PlaylistService.getPlaylistById = jest.fn(_ => playlistPromise)

            const expectedPlaylist: PlaylistObject = {
                ...mockPlaylistResponse,
                tracks: [mockTrack]
            }

            getPlaylist(mockPlaylistResponse.id).then(playlist => {
                expect(playlist).toMatchObject(expectedPlaylist)
                done()
            })
        })

        it("Returns undefined if it doesn't get a response", (done) => {
            PlaylistService.getPlaylistById = jest.fn(_ => undefined)
            getPlaylist(mockPlaylistResponse.id).then(playlist => {
                expect(playlist).toBeUndefined()
                done()
            })
        })
    })
})