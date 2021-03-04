import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import AlbumPage from "./Components/Pages/Album/AlbumPage"
import LandingPage from "./Components/Shared/LandingPage"
import { AuthenticationContext, AuthenticationContextObject, TokenRetriever, AuthToken } from "./Models/Authentication"
import HomePage from "./Components/Pages/Home/HomePage"
import { initAxios } from "./Endpoints/AxiosConfig"
import AuthService from "./Services/AuthService"

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
            AuthService.constructAuthorizationURI(verifier).then((url) => {
                const tokenRetriever: TokenRetriever = {
                    redirect_url: url,
                    verifier: verifier,
                }

                this.setState({ ...this.state, tokenRetriever })
            })
        } else {
            AuthService.exchangeCodeForToken(code, verifier).then((authToken) => {
                if (authToken) {
                    this.refreshTokenCallback(authToken)
                    initAxios(this.state)
                }
            })
        }

        this.state = {
            logOut: () => {
                this.setState({ ...this.state, authToken: undefined })
            },
        }
    }

    render() {
        const pageURL = "/spotify-playlist-plus"

        let landingElement = LandingPage()
        if (this.state.authToken) {
            landingElement = <HomePage />
        }

        return (
            <main>
                <AuthenticationContext.Provider value={this.state}>
                    <Switch>
                        <Route exact path={pageURL}>
                            {landingElement}
                        </Route>
                        <Route exact path={pageURL + "/AlbumPage"} component={AlbumPage} />
                        <Route exact path={pageURL + "/playlist/:id"} component={PlaylistPage} />
                    </Switch>
                </AuthenticationContext.Provider>
            </main>
        )
    }

    refreshTokenCallback(token: AuthToken) {
        this.setState({ ...this.state, authToken: token })
        AuthService.refreshTimer(token, this.refreshTokenCallback)
    }
}
