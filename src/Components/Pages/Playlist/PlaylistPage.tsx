import React from "react"
import { Container } from "react-bootstrap"
import { RouteComponentProps } from "react-router"
import PlaylistService from "../../../Services/PlaylistService"
import { PlaylistObject, SimplifiedPlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"
import TrackTable from "../../Shared/TrackList/TrackTable"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistZeroState from "./PlaylistZeroState"
import { getRequest } from "../../../Endpoints/AxiosConfig"

type PlaylistPageProps = RouteComponentProps<{ id: string }>
interface PlaylistPageState {
    playlistId: string
    playlist?: PlaylistObject
}

export default class PlaylistPage extends React.Component<PlaylistPageProps, PlaylistPageState> {
    constructor(props: RouteComponentProps<{ id: string }>) {
        super(props)
        this.state = {
            playlistId: props.match.params.id,
        }

        this.onSearchSelect = this.onSearchSelect.bind(this)
        const playlistId = props.match.params.id
        this.state = { playlistId }

        this.loadPlaylist = this.loadPlaylist.bind(this)
        this.loadPlaylist(playlistId)
    }

    componentDidUpdate(prevProps: PlaylistPageProps) {
        if (this.props.location !== prevProps.location) {
            const playlistId = this.props.match.params.id
            this.loadPlaylist(playlistId)
        }
    }

    loadPlaylist(playlistId: string) {
        PlaylistService.getPlaylist(playlistId).then((playlist) => {
            if (playlist) {
                this.setState({ playlistId, playlist })
            } else {
                // Error happened, check console. In future, display error to user?
            }
        })
    }

    onSearchSelect(playlist: SimplifiedPlaylistObject) {
        const newPlaylist: PlaylistObject = {
            ...playlist,
            tracks: [],
        }

        getRequest(playlist.tracks.href).then((tracks) => {
            newPlaylist.tracks = tracks.data.items

            this.setState({
                ...this.state,
                playlist: newPlaylist,
            })
        })
    }

    render() {
        if (!this.state.playlist) {
            return <PlaylistZeroState />
        }

        // Extract the TrackObjects from the PlaylistTrackObjects
        const tracks = this.state.playlist?.tracks.map(({ track }) => track)

        return (
            <Container fluid>
                <PlaylistHeader playlist={this.state.playlist} />
                <TrackTable tracks={tracks} />
            </Container>
        )
    }
}
