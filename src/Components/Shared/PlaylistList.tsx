import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SimplifiedPlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import PlaylistService from "../../Services/PlaylistService"

interface PlaylistListState {
    playlists: SimplifiedPlaylistObject[]
}

export default class PlaylistList extends React.Component<{}, PlaylistListState> {
    constructor(props: {}) {
        super(props)
        this.state = { playlists: [] }

        PlaylistService.getUserPlaylistsList().then((playlists) => {
            if (playlists) {
                this.setState({ ...this.state, playlists })
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <h2>Playlists</h2>
                <ListGroup>
                    {this.state.playlists.map((playlist) => (
                        <Link key={playlist.id} to={`/spotify-playlist-plus/playlist/${playlist.id}`}>
                            <ListGroup.Item>{playlist.name}</ListGroup.Item>
                        </Link>
                    ))}
                </ListGroup>
            </React.Fragment>
        )
    }
}