import React from "react"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { msToTimestamp } from "../../../Services/Utility"
import PlayerButton from "../PlayerButton"
import TrackDropDown from "./TrackDropDown"
import "./TrackTable.css"

interface TrackTableItemProps {
    track: TrackObject
}

interface TrackTableItemState extends TrackTableItemProps {}

export default class TrackTableItem extends React.Component<TrackTableItemProps, TrackTableItemState> {
    constructor(props: TrackTableItemProps) {
        super(props)
        this.state = { track: props.track }
    }

    render() {
        const artistNames = this.state.track.artists.map(artist => artist.name).join(", ")

        return (
            <tr>
                <td><PlayerButton currentlyPlaying={false}>&#21E8</PlayerButton></td>
                <td>{this.state.track.name}</td>
                <td>{artistNames}</td>
                <td>{this.state.track.album?.name ?? "No album"}</td>
                <td>{msToTimestamp(this.state.track.duration_ms)}</td>
                <td><TrackDropDown track={this.state.track}/></td>
            </tr>
        )
    }
}
