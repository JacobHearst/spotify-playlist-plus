import React from "react"
import { Table } from "react-bootstrap"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import TrackTableItem from "./TrackTableItem"

interface TrackTableProps {
    tracks?: TrackObject[]
    currentPlayingTrack?: number
}

interface TrackTableState extends TrackTableProps {}

export default class TrackTable extends React.Component<TrackTableProps, TrackTableState> {
    constructor(props: TrackTableProps) {
        super(props)
        this.state = { tracks: props.tracks, currentPlayingTrack: -1 }
        this.updateCurrentTrack.bind(this)
    }

    updateCurrentTrack = (trackNumber: number) => {
        const trackPaused = trackNumber == this.state.currentPlayingTrack
        const currentlyPlayingTrack = trackPaused ? -1 : trackNumber

        this.setState({ ...this.state, currentPlayingTrack: currentlyPlayingTrack })
    }

    render() {
        if (!this.state.tracks) {
            return <p>Loading tracks</p>
        }

        return (
            <Table hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Artist(s)</th>
                        <th>Album</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tracks.map((track, index) => (
                        <TrackTableItem
                            key={track.id}
                            track={track}
                            index={index}
                            updateCurrentlyPlayingCallback={this.updateCurrentTrack}
                            currentlyPlaying={this.state.currentPlayingTrack == index}
                        />
                    ))}
                </tbody>
            </Table>
        )
    }
}
