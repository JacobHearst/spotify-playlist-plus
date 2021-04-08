import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SimplifiedPlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import UserService from "../../Services/UserService"

interface PlaylistListState {
    playlists: SimplifiedPlaylistObject[]
}

export default class PlaylistList extends React.Component<{}, PlaylistListState> {
    constructor(props: {}) {
        super(props)
        this.state = { playlists: [] }

        UserService.getPlaylists().then((playlists) => {
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
                        <Link key={playlist.id} to={`/spotify-playlist-plus/Playlist/${playlist.id}`}>
                            <ListGroup.Item>{playlist.name}</ListGroup.Item>
                        </Link>
                    ))}
                </ListGroup>
            </React.Fragment>
        )
    }
}
