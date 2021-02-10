import React from "react"
import { Container } from "react-bootstrap"
import { Track } from "../../../Models/Tracks"
import PlaylistTrackList from "../../Shared/TrackList/TrackTable"
import PlaylistHeader from "./PlaylistHeader"

export default class PlaylistPage extends React.Component {
    render() {
        const mockTrack: Track = {
            track_number: 1,
            added_at: "2/10/2021",
            artists: [],
            duration_ms: 1000,
            explicit: false,
            href: "link",
            id: "mySong",
            is_playable: true,
            name: "My Song",
            popularity: 100
        }

        return (
            <Container fluid>
                <PlaylistHeader />
                <PlaylistTrackList tracks={[mockTrack, mockTrack]}/>
            </Container>
        )
    }
}