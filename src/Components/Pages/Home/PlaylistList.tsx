import React from "react"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"

interface PlaylistListProps {
    playlists: PlaylistObject[]
}

interface PlaylistListState extends PlaylistListProps {}

export default class PlaylistList extends React.Component<PlaylistListProps, PlaylistListState> {
    render() {
        return (
            <React.Fragment>
                <h1>Playlists:</h1>
            </React.Fragment>
        )
    }
}