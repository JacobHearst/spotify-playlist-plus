import React from "react"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import { Dropdown } from "react-bootstrap"

interface TrackDropDownProps {
    track: TrackObject
}

export default class TrackDropDown extends React.Component<TrackDropDownProps, {}> {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="Secondary">
                    <ThreeDotsVertical />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href={this.props.track.uri}>Open in Spotify</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}