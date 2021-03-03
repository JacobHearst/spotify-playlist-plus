import React from "react"
import { Container } from "react-bootstrap"
import { match } from "react-router-dom"
import PlaylistService from "../../../Services/PlaylistService"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"
import Navbar from "../../Shared/Navbar"
import TrackTable from "../../Shared/TrackList/TrackTable"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistZeroState from "./PlaylistZeroState"

interface PlaylistPageProps {
    match: match<{id: string}>
}

interface PlaylistPageState {
    playlistId: string,
    playlist?: PlaylistObject
}

export default class PlaylistPage extends React.Component<PlaylistPageProps, PlaylistPageState> {
    constructor(props: PlaylistPageProps) {
        super(props)
        this.state = {
            playlistId: props.match.params.id
        }

        this.loadPlaylist = this.loadPlaylist.bind(this)
        this.loadPlaylist()
    }

    loadPlaylist() {
        console.log("Loading playlist")
        PlaylistService.getPlaylist(this.state.playlistId).then((playlist) => {
            if (playlist) {
                this.setState({ ...this.state, playlist })
            } else {
                // Error happened, check console. In future, display error to user?
            }
        })
    }

    render() {
        if (!this.state.playlist) {
            return (<PlaylistZeroState/>)
        }
        
        // Extract the TrackObjects from the PlaylistTrackObjects
        const tracks = this.state.playlist.tracks.map(({ track }) => track)

        return (
            <Container fluid>
                <Navbar/>
                <PlaylistHeader playlist={this.state.playlist}/>
                <TrackTable tracks={tracks} />
            </Container>
        )
    }
}