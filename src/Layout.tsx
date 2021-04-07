import React from "react"
import Navbar from "./Components/Shared/Navbar"
import PropTypes from "prop-types"
import { AuthenticationContext, AuthenticationContextObject } from "./Models/Authentication"
import { Container, Row, Col, Button } from "react-bootstrap"
import PlaylistList from "./Components/Shared/PlaylistList"

interface LayoutProps {
    children: PropTypes.ReactNodeArray
}

export default class Layout extends React.Component {

    render() {
        return (
            <AuthenticationContext.Consumer>
                {(context?: AuthenticationContextObject) => {
                    if (!(context && context.authToken)) {
                        return this.props.children
                    }

                    return (
                        <Container fluid className="h-100">
                            <div className="h-100 d-flex flex-column">
                                <Row id="navbar">
                                    <Col>
                                        <b>Spotify Playlist+</b>
                                    </Col>
                                    <Col>
                                        <Navbar />
                                        <Button size="sm" variant="info" onClick={() => context?.logOut()} className="float-right">Log out</Button>
                                    </Col>
                                </Row>
                                <Row className="flex-grow-1">
                                    <Col md="3" className="no-float pt-3" id="left-content-container">
                                        <PlaylistList />
                                    </Col>
                                    <Col md="9" className="no-float pt-3">
                                        {this.props.children}
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    )
                }}
            </AuthenticationContext.Consumer>
        )
    }
}