import React from "react"
import { PlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"

interface PlaylistListProps {
    playlists: PlaylistObject[]
}

interface PlaylistListState extends PlaylistListProps {}

export default class PlaylistList extends React.Component<PlaylistListProps, PlaylistListState> {
    constructor(props: PlaylistListProps) {
        super(props)
        this.state = { ...props }
    }
    render() {
        return (
            <p>Playlists: {this.state.playlists.length}</p>
        )
    }
}