import React from "react"
import { Route } from "react-router-dom"
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
import Layout from "./Layout"

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

        let landingElement = <LandingPage />
        if (this.state.authToken) {
            landingElement = <HomePage />
        }

        return (
            <AuthenticationContext.Provider value={this.state}>
                <Layout>
                    <Route exact path={pageURL}>
                        {landingElement}
                    </Route>
                    <Route exact path={pageURL + "/AlbumPage"} component={AlbumPage} />
                    <Route exact path={pageURL + "/artist/:id"} component={ArtistPage} />
                    <Route exact path={pageURL + "/playlist/:id"} component={PlaylistPage} />
                </Layout>
            </AuthenticationContext.Provider>
        )
    }

    async refreshTokenCallback(token: AuthToken) {
        const player: Spotify.SpotifyPlayer = await getSpotifyPlayer(token)
        player.connect().then((success) => {
            console.log(success)
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
