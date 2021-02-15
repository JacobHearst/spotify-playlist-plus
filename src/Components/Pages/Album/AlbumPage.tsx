import React from "react"
import { Container } from "react-bootstrap"
import { AlbumObject } from "../../../Models/SpotifyObjects/AlbumObjects"
import { Track } from "../../../Models/Tracks"
import PlaylistHeader from "../Playlist/PlaylistHeader"
import AlbumZeroState from "./AlbumZeroState"

interface AlbumPageProps {
    album: AlbumObject
}

interface AlbumPageState extends AlbumPageProps { }

export default class PlaylistPage extends React.Component<AlbumPageProps, AlbumPageState> {
    constructor(props: AlbumPageProps) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        const { name, tracks } = this.state.album
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
        

        return (
            <Container fluid>
                <h1>{name}</h1>
                <img src="https://images-na.ssl-images-amazon.com/images/I/6123EInXGSL._SL1081_.jpg" height="300px" width="300px"></img>
                {
                    this.state.album.tracks.length > 0
                        ? <p>{tracks}</p>
                        : <AlbumZeroState/>
                }
            </Container>
        )
    }
}