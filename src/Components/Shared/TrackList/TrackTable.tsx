import React from "react"
import { Table } from "react-bootstrap"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import TrackTableItem from "./TrackTableItem"

interface TrackTableProps {
    tracks?: TrackObject[]
}

interface TrackTableState extends TrackTableProps {}

export default class TrackTable extends React.Component<TrackTableProps, TrackTableState> {
    constructor(props: TrackTableProps) {
        super(props)
        this.state = { tracks: props.tracks }
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
                    </tr>
                </thead>
                <tbody>
                    {this.state.tracks.map((track) => (<TrackTableItem key={track.id} track={track}/>))}
                </tbody>
            </Table>
        )
    }
}