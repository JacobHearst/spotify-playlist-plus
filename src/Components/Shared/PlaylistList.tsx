import React from "react"
import { Button, Col, Form, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SimplifiedPlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import PlaylistService from "../../Services/PlaylistService"
import UserService from "../../Services/UserService"

interface PlaylistListState {
    playlists: SimplifiedPlaylistObject[]
    newPlaylistName: string
}

export default class PlaylistList extends React.Component<{}, PlaylistListState> {
    constructor(props: {}) {
        super(props)
        this.state = { playlists: [], newPlaylistName: "" }

        this.createPlaylist = this.createPlaylist.bind(this)

        UserService.getPlaylists().then((playlists) => {
            if (playlists) {
                this.setState({ ...this.state, playlists })
            }
        })
    }

    createPlaylist() {
        this.setState({ newPlaylistName: "" })
        PlaylistService.createPlaylist(this.state.newPlaylistName).then((newPlaylist) => {
            if (newPlaylist) {
                const simplifiedPlaylist: SimplifiedPlaylistObject = {
                    ...newPlaylist,
                    tracks: { total: 0, href: "" },
                    collaborative: false
                }
                const playlists = [simplifiedPlaylist, ...this.state.playlists]
                this.setState({ ...this.state, playlists })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Playlists</h2>
                <ListGroup>
                    <ListGroup.Item>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        as="input"
                                        placeholder="New playlist"
                                        onChange={(event: any) => this.setState({ newPlaylistName: event.target.value })}
                                        value={this.state.newPlaylistName}/>
                                </Col>
                                <Col sm="auto">
                                    <Button variant="info" onClick={this.createPlaylist}>Create</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </ListGroup.Item>
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
