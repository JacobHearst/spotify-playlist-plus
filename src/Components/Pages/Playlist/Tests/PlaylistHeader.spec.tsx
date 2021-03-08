import React from 'react'
import renderer from 'react-test-renderer'
import { PlaylistObject } from '../../../../Models/SpotifyObjects/PlaylistObjects'
import { PublicUserObject } from '../../../../Models/SpotifyObjects/SharedObjects'
import PlaylistHeader from '../PlaylistHeader'

describe("PlaylistHeader", () => {
    const mockPlaylist: PlaylistObject = {
        description: "My description",
        id: "myPlaylistId",
        href: "https://spotify.com",
        images: [{ url: "https://spotify.com", height: 100, width: 100 }],
        name: "My Playlist",
        owner: { display_name: "My user" } as PublicUserObject,
        public: true,
        tracks: []
    }

    it("should properly display playlist information when a playlist is passed in", () => {
        const component = renderer.create(<PlaylistHeader playlist={mockPlaylist} />)

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("should display a loading message when no playlist is passed in", () => {
        const component = renderer.create(<PlaylistHeader />)
        
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
