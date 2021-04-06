import React from "react"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { msToTimestamp } from "../../../Services/Utility"
import ArtistLinks from "../ArtistLinks"
import PlayerButton from "../PlayerButton"
import TrackDropDown from "./TrackDropDown"
import "./TrackTable.css"

interface TrackTableItemProps {
    track: TrackObject
    // eslint-disable-next-line
    updateCurrentlyPlayingCallback(trackNumber: number): void
    currentlyPlaying?: boolean
    index: number
}


export default class TrackTableItem extends React.Component<TrackTableItemProps, {}> {
    render() {
        return (
            <tr>
                <td>
                    <PlayerButton
                        currentlyPlaying={this.props.currentlyPlaying}
                        uris={[this.props.track.uri]}
                        updateCurrentlyPlayingCallback={this.props.updateCurrentlyPlayingCallback}
                        index={this.props.index}></PlayerButton>
                </td>
                <td><span className="text-muted">{this.props.track.track_number}</span></td>
                <td>{this.props.track.name}</td>
                <td><ArtistLinks artists={this.props.track.artists} /></td>
                <td>{this.props.track.album?.name ?? "No album"}</td>
                <td>{msToTimestamp(this.props.track.duration_ms)}</td>
                <td><TrackDropDown track={this.props.track} /></td>
            </tr>
        )
    }
}
