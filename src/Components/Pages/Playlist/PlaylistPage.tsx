import React from "react"
import { Container } from "react-bootstrap"
import { RouteComponentProps } from "react-router"
import PlaylistService from "../../../Services/PlaylistService"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"
import TrackTable from "../../Shared/TrackList/TrackTable"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistZeroState from "./PlaylistZeroState"

interface PlaylistPageState {
    playlistId: string
    playlist?: PlaylistObject
}

export default class PlaylistPage extends React.Component<RouteComponentProps<{id: string}>, PlaylistPageState> {
    constructor(props: RouteComponentProps<{ id: string }>) {
        super(props)
        this.state = {
            playlistId: props.match.params.id
        }

        this.loadPlaylist = this.loadPlaylist.bind(this)
        this.loadPlaylist()
    }

    loadPlaylist() {
        PlaylistService.getPlaylist(this.props.match.params.id).then((playlist) => {
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
                <PlaylistHeader playlist={this.state.playlist}/>
                <TrackTable tracks={tracks} />
            </Container>
        )
    }
}