import React from "react"
import { Link } from "react-router-dom"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { msToTimestamp } from "../../../Services/Utility"
import PlayerButton from "../PlayerButton"
import TrackDropDown from "./TrackDropDown"
import "./TrackTable.css"

/* eslint-disable */
interface TrackTableItemProps {
    track: TrackObject
    updateCurrentlyPlayingCallback(trackNumber: number): void
    currentlyPlaying?: boolean
    index: number
}
/* eslint-enable */

interface TrackTableItemState {
    track: TrackObject
}

export default class TrackTableItem extends React.Component<TrackTableItemProps, TrackTableItemState> {
    constructor(props: TrackTableItemProps) {
        super(props)
        this.state = { track: props.track }
    }

    render() {
        const artistNames = this.state.track.artists.map((artist, index, array) => {
            if (index == array.length - 1) {
                // Don't put a comma and space after the last artist
                return <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
            }

            return (
                <span key={artist.id}>
                    <Link to={`/artist/${artist.id}`}>{artist.name}</Link>,&nbsp;
                </span>
            )
        })

        return (
            <tr>
                <td>
                    <PlayerButton
                        currentlyPlaying={this.props.currentlyPlaying}
                        uris={[this.state.track.uri]}
                        updateCurrentlyPlayingCallback={this.props.updateCurrentlyPlayingCallback}
                        index={this.props.index}></PlayerButton>
                </td>
                <td><span className="text-muted">{this.state.track.track_number}</span></td>
                <td>{this.state.track.name}</td>
                <td>{artistNames}</td>
                <td>{this.state.track.album?.name ?? "No album"}</td>
                <td>{msToTimestamp(this.state.track.duration_ms)}</td>
                <td><TrackDropDown track={this.state.track} /></td>
            </tr>
        )
    }
}
