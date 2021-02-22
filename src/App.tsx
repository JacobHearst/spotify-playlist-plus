import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import AlbumPage from "./Components/Pages/Album/AlbumPage"
import LandingPage from "./Components/Shared/LandingPage"
import { TokenWatcher, AuthenticationContext, AuthenticationContextObject } from "./Models/Authentication"
import HomePage from "./Components/Pages/Home/HomePage"
import { initAxios } from "./Endpoints/AxiosConfig"

export default class App extends React.Component<{}, AuthenticationContextObject> {
    constructor(props: {}) {
        super(props)

        const authContext: AuthenticationContextObject = {
            logOut: () => { this.setState({...this.state, tokenWatcher: undefined }) }
        }

        const params = this.getURLHashValues(window.location.hash)

        // True when we were redirected from Spotify
        if (params && params.length > 0) {
            authContext.tokenWatcher = new TokenWatcher(params[0], params[1], Number(params[2]))
            initAxios(authContext)
        }
    
        this.state = authContext
    }

    getURLHashValues(urlHash: string) {
        const values = urlHash
            .slice(1, urlHash.length) // Remove the "#" from the beginning of the hash
            .split("&") // Split it into components
            .map(param => param.split("=")[1]) // Grab just the values from the params
        
        // If the values arr isn't empty and isn't full of undefined values
        if (values.length > 0 && values.every(val => !!val)) {
            return values
        }
    }

    render() {
        const pageURL = "/spotify-playlist-plus"

        let landingElement = LandingPage()
        if (this.state.tokenWatcher) {
            landingElement = <HomePage/>
        }

        return (
            <main>
                <AuthenticationContext.Provider value={this.state}>
                    <Switch>
                        <Route exact path={pageURL}>{ landingElement }</Route>
                        <Route exact path={pageURL + "/AlbumPage"} component={AlbumPage} />
                        <Route exact path={pageURL + "/playlist/:id"} component={PlaylistPage} />
                    </Switch>
                </AuthenticationContext.Provider>
            </main>
        )
    }
}
