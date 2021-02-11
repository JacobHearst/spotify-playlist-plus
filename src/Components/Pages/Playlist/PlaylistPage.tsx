import React from "react"
import { Container } from "react-bootstrap"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"
import { Track } from "../../../Models/Tracks"
import PlaylistTrackList from "../../Shared/TrackList/TrackTable"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistZeroState from "./PlaylistZeroState"

interface PlaylistPageProps {
    playlist: PlaylistObject
}

interface PlaylistPageState extends PlaylistPageProps { }

export default class PlaylistPage extends React.Component<PlaylistPageProps, PlaylistPageState> {
    constructor(props: PlaylistPageProps) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        const mockTrack: Track = {
            track_number: 1,
            added_at: "2/10/2021",
            artists: [],
            duration_ms: 1000,
            explicit: false,
            href: "link",
            id: Math.random().toString(),
            is_playable: true,
            name: "My Song",
            popularity: 100
        }

        const mockTrack2 = { ...mockTrack, id: Math.random().toString() }

        return (
            <Container fluid>
                <PlaylistHeader playlist={this.state.playlist}/>
                {
                    this.state.playlist.tracks.length > 0
                        ? <PlaylistTrackList tracks={[mockTrack, mockTrack2]} />
                        : <PlaylistZeroState/>
                }
            </Container>
        )
    }
}