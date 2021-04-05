import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import PlaylistList from "./PlaylistList"
import "./HomePage.css"

export default class HomePage extends React.Component {
    render() {
        return (
            <Container fluid className="h-100">
                <Row className="h-100">
                    <Col md="3" className="no-float" id="left-content-container">
                        <PlaylistList playlists={[]}/>
                    </Col>
                    <Col md="9" className="no-float" id="right-content-container">

                    </Col>
                </Row>
            </Container>
        )
    }
}