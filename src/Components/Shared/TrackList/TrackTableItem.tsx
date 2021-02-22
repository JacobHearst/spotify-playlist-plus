import React from "react"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import PlayerButton from "../PlayerButton"

interface TrackTableItemProps {
    track: TrackObject
}

interface TrackTableItemState extends TrackTableItemProps {}

export default class TrackTableItem extends React.Component<TrackTableItemProps, TrackTableItemState> {
    constructor(props: TrackTableItemProps) {
        super(props)
        this.state = { ...props }
    }

    render() {
        const artistNames = this.state.track.artists.map(artist => artist.name).join(", ")
        return (
            <tr>
                <PlayerButton currentlyPlaying={false}>&#21E8</PlayerButton>
                <td>{this.state.track.name}</td>
                <td>{artistNames}</td>
                <td>{this.state.track.album?.name ?? "No album"}</td>
                <td>{this.state.track.duration_ms}</td>
            </tr>
        )
    }
}
