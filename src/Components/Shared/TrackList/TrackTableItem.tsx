import React from "react"
import { Track } from "../../../Models/Tracks"

interface TrackTableItemProps {
    track: Track
}

interface TrackTableItemState extends TrackTableItemProps {}

export default class TrackTableItem extends React.Component<TrackTableItemProps, TrackTableItemState> {
    constructor(props: TrackTableItemProps) {
        super(props)
        this.state = { ...props }
    }

    render() {
        return (
            <tr>
                <td>{this.state.track.track_number}</td>
                <td>{this.state.track.name}</td>
                <td>{this.state.track.album?.name ?? "No album"}</td>
                <td>{this.state.track.added_at}</td>
                <td>{this.state.track.duration_ms}</td>
            </tr>
        )
    }
}