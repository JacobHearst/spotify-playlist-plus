import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"

interface PlaylistHeaderProps {
    playlist: PlaylistObject
}

interface PlaylistHeaderState extends PlaylistHeaderProps {}

export default class PlaylistHeader extends React.Component<PlaylistHeaderProps, PlaylistHeaderState> {
    constructor(props: PlaylistHeaderProps) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        let { name, description, owner, tracks } = this.state.playlist
        return (
            <Row>
                {/* Header */}
                <Col xs="auto">
                    {/* Image size can be up to 640 by 640 */}
                    <Image src={"https://placeimg.com/300/300/tech"}/>
                </Col>
                <Col>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Owned by: {owner.display_name}</p>
                    <p>{tracks.length} Songs, N days/hours/minutes</p>
                </Col>
            </Row>
        )
    }
}