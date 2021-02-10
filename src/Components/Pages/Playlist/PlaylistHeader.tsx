import React from "react"
import { Col, Image, Row } from "react-bootstrap"

export default class PlaylistHeader extends React.Component {
    render() {
        return (
            <Row>
                {/* Header */}
                <Col xs="auto">
                    {/* Image size can be up to 640 by 640 */}
                    <Image src={"https://placeimg.com/300/300/tech"}/>
                </Col>
                <Col>
                    <h2>Playlist name</h2>
                    <p>Description</p>
                    <p>Created by: User</p>
                    <p>X Songs, N days/hours/minutes</p>
                </Col>
            </Row>
        )
    }
}