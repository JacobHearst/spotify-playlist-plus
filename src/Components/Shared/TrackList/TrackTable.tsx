import React from "react"
import { Table } from "react-bootstrap"
import { Track } from "../../../Models/Tracks"
import TrackTableItem from "./TrackTableItem"

interface TrackTableProps {
    tracks: Track[]
}

interface TrackTableState extends TrackTableProps {}

export default class TrackTable extends React.Component<TrackTableProps, TrackTableState> {
    constructor(props: TrackTableProps) {
        super(props)
        this.state = { ...props }
    }

    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Date added</th>
                        <th>Duration (ms)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tracks.map((track) => (<TrackTableItem key={track.id} track={track}/>)) }
                </tbody>
            </Table>
        )
    }
}