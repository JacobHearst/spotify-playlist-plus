import React from "react"
import { Table } from "react-bootstrap"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import TrackTableItem from "./TrackTableItem"

interface TrackTableProps {
    tracks?: TrackObject[]
    currentPlayingTrack?: number
}

interface TrackTableState {
    currentlyPlayingTrack?: number
}

export default class TrackTable extends React.Component<TrackTableProps, TrackTableState> {
    constructor(props: TrackTableProps) {
        super(props)
        this.state = { currentlyPlayingTrack: -1 }
        this.updateCurrentTrack.bind(this)
    }

    updateCurrentTrack = (trackNumber: number) => {
        const trackPaused = trackNumber == this.state.currentlyPlayingTrack
        const currentlyPlayingTrack = trackPaused ? -1 : trackNumber

        this.setState({ currentlyPlayingTrack })
    }

    render() {
        if (!this.props.tracks) {
            return <p>Loading tracks</p>
        }

        return (
            <Table hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Title</th>
                        <th>Artist(s)</th>
                        <th>Album</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tracks!.map((track, index) => {
                        return (
                            <TrackTableItem
                                key={`${track.id}-${index}`}
                                track={track}
                                index={index}
                                updateCurrentlyPlayingCallback={this.updateCurrentTrack}
                                currentlyPlaying={this.state.currentlyPlayingTrack == index}
                            />
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}
