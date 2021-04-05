import React from "react"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { msToTimestamp } from "../../../Services/Utility"
import ArtistLinks from "../ArtistLinks"
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
                <td><ArtistLinks artists={this.state.track.artists}/></td>
                <td>{this.state.track.album?.name ?? "No album"}</td>
                <td>{msToTimestamp(this.state.track.duration_ms)}</td>
                <td><TrackDropDown track={this.state.track} /></td>
            </tr>
        )
    }
}
