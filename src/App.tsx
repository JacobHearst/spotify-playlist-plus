import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import AlbumPage from "./Components/Pages/Album/AlbumPage"
import LandingPage from "./Components/Shared/LandingPage"
import ArtistPage from "./Components/Pages/Artist/ArtistPage"
import { AuthenticationContext, AuthenticationContextObject, TokenRetriever, AuthToken } from "./Models/Authentication"
import HomePage from "./Components/Pages/Home/HomePage"
import { initAxios } from "./Endpoints/AxiosConfig"
import AuthService from "./Services/AuthService"
import { getSpotifyPlayer } from "./Services/PlayerService"
import { Spotify } from "./Models/SpotifyObjects/PlayerObjects"
import Switch from "react-bootstrap/esm/Switch"
import { Container, Row, Col, Button } from "react-bootstrap"
import PlaylistList from "./Components/Shared/PlaylistList"
import Navbar from "./Components/Shared/Navbar"
import SearchBar from "./Components/Shared/SearchBar"

export default class App extends React.Component<{}, AuthenticationContextObject> {
    constructor(props: {}) {
        super(props)

        // get cookie or create a new one
        const verifier = AuthService.getVerifierCookie() ?? AuthService.createCodeVerifierCookie()

        // try and get authorization code from url
        const code = new URLSearchParams(window.location.search).get("code")

        // havn't redirected yet/ need to do first step of authorization
        if (!code) {
            // force reload component when we actually get the redirect url for the log in button
            this.getAuthURL(verifier)
        }
        // Redirected from Spotify Auth
        else {
            AuthService.exchangeCodeForToken(code, verifier).then((authToken) => {
                if (authToken) {
                    initAxios(authToken)
                    this.refreshTokenCallback(authToken)
                }
            })
        }

        this.state = {
            logOut: () => {
                this.getAuthURL(verifier)
                this.setState({ ...this.state, authToken: undefined })
            },
        }
    }

    getAuthURL(verifier: string) {
        AuthService.constructAuthorizationURI(verifier).then((redirect_url) => {
            const tokenRetriever: TokenRetriever = { redirect_url, verifier }
            this.setState({ ...this.state, tokenRetriever })
        })
    }

    render() {
        const pageURL = "/spotify-playlist-plus"

        if (!this.state.authToken) {
            return (
                <AuthenticationContext.Provider value={this.state}>
                    <LandingPage />
                </AuthenticationContext.Provider>
            )
        }

        return (
            <AuthenticationContext.Provider value={this.state}>
                <Router>
                    <Container fluid className="h-100">
                        <div className="h-100 d-flex flex-column">
                            <Row id="navbar">
                                <Col>
                                    <b>Spotify Playlist+</b>
                                </Col>
                                <Col>
                                    <SearchBar artist={true} playlist={true} track={true} album={true}></SearchBar>
                                </Col>
                                <Col>
                                    <Navbar />
                                    <Button size="sm" variant="info" onClick={this.state.logOut} className="float-right">
                                        Log out
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="flex-grow-1">
                                <Col md="3" className="no-float pt-3" id="left-content-container">
                                    <PlaylistList />
                                </Col>
                                <Col md="9" className="no-float pt-3">
                                    <Switch>
                                        <Route exact path={pageURL} component={HomePage} />
                                        <Route exact path={pageURL + "/Album"} component={AlbumPage} />
                                        <Route path={pageURL + "/Artist/:id"} component={ArtistPage} />
                                        <Route path={pageURL + "/Playlist/:id"} component={PlaylistPage} />
                                    </Switch>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Router>
            </AuthenticationContext.Provider>
        )
    }

    async refreshTokenCallback(token: AuthToken) {
        const player: Spotify.SpotifyPlayer = await getSpotifyPlayer(token)
        player.connect().catch((error) => {
            console.error("Error connecting player:", error)
        })

        player.on("ready", (device) => {
            const player = this.state.player
            player!._options.id = device.device_id

            this.setState({ ...this.state, player: player })
        })

        this.setState({ ...this.state, authToken: token, player: player })
        AuthService.refreshTimer(token, this.refreshTokenCallback)
    }
}
