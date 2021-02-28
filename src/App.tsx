import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import AlbumPage from "./Components/Pages/Album/AlbumPage"
import LandingPage from "./Components/Shared/LandingPage"
import { AuthenticationContext, AuthenticationContextObject, TokenRetriever } from "./Models/Authentication"
import HomePage from "./Components/Pages/Home/HomePage"
import { initAxios } from "./Endpoints/AxiosConfig"
import { createCodeVerifierCookie, constructAuthorizationURI, exchangeCodeForToken } from "./Services/TokenRetrievalService"

export default class App extends React.Component<{}, AuthenticationContextObject> {
    constructor(props: {}) {
        super(props)

        // get cookie or create a new one
        const verifier = GetVerifierCookie() ?? createCodeVerifierCookie()

        // try and get authorization code from url
        const code = new URLSearchParams(window.location.search).get("code")

        // SOS. This makes me want to KMS
        // havn't redirected yet/ need to do first step of authorization
        if (!code) {
            if (!this.state) {
                // temp variable just used to cause a force relod
                const r: TokenRetriever = {
                    redirect_url: "",
                    verifier: verifier,
                }

                // force reload component when we actually get the redirect url for the log in button
                constructAuthorizationURI(verifier).then((url) => {
                    r.redirect_url = url
                    this.setState({ ...this.state, tokenRetriever: r })
                })
            }
        } else {
            exchangeCodeForToken(code, verifier).then((watcher) => {
                if (watcher) {
                    this.setState({
                        ...this.state,
                        tokenWatcher: watcher,
                    })
                }
            })
        }

        const authContext: AuthenticationContextObject = {
            logOut: () => {
                this.setState({ ...this.state, tokenWatcher: undefined })
            },
        }

        this.state = authContext
        initAxios(authContext)
    }

    render() {
        const pageURL = "/spotify-playlist-plus"

        let landingElement = LandingPage()
        if (this.state.tokenWatcher) {
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
}

function GetVerifierCookie(): string | undefined {
    // document.cookie is a 'string' representation of the cookies, seperated by '; '
    const cookies = document.cookie.split("; ") // # yum

    // find the cookie that starts with code_verifier
    const verifier = cookies.filter((cookie) => cookie.startsWith("code_verifier"))

    // if it exists, return it
    return verifier.length > 0 ? verifier[0].split("=")[1] : undefined
}
