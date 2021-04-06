import React from "react"
import { Link } from "react-router-dom"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { msToTimestamp } from "../../../Services/Utility"
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
        const artistNames = this.props.track.artists.map((artist, index, array) => {
            // Don't put a comma and space after the last artist
            if (index == array.length - 1) {
                return <Link key={artist.id} to={`/artists/${artist.id}`}>{artist.name}</Link>
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
                        uris={[this.props.track.uri]}
                        updateCurrentlyPlayingCallback={this.props.updateCurrentlyPlayingCallback}
                        index={this.props.index}></PlayerButton>
                </td>
                <td><span className="text-muted">{this.props.track.track_number}</span></td>
                <td>{this.props.track.name}</td>
                <td>{artistNames}</td>
                <td>{this.props.track.album?.name ?? "No album"}</td>
                <td>{msToTimestamp(this.props.track.duration_ms)}</td>
                <td><TrackDropDown track={this.props.track} /></td>
            </tr>
        )
    }
}
