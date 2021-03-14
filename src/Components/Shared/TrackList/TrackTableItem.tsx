import React from "react"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { msToTimestamp } from "../../../Services/Utility"
import PlayerButton from "../PlayerButton"

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
        const artistNames = this.state.track.artists.map((artist) => artist.name).join(", ")
        return (
            <tr>
                <td>
                    <PlayerButton
                        currentlyPlaying={this.props.currentlyPlaying}
                        uris={[this.state.track.uri]}
                        updateCurrentlyPlayingCallback={this.props.updateCurrentlyPlayingCallback}
                        index={this.props.index}></PlayerButton>
                </td>
                <td>{this.state.track.track_number}</td>
                <td>{this.state.track.name}</td>
                <td>{artistNames}</td>
                <td>{this.state.track.album?.name ?? "No album"}</td>
                <td>{msToTimestamp(this.state.track.duration_ms)}</td>
            </tr>
        )
    }
}
