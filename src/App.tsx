import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import AlbumPage from "./Components/Pages/Album/AlbumPage"
import LandingPage from "./Components/Shared/LandingPage"
import { AuthenticationContext } from "./Models/Authentication"

export default class App extends React.Component {
    state = {
        authObj: {},
    }

    render() {
        const pageURL = "/spotify-playlist-plus"
        return (
            <main>
                <AuthenticationContext.Provider value={this.state}>
                    <Switch>
                        <Route exact path={pageURL} component={LandingPage} />
                        <Route exact path={pageURL + "/AlbumPage"} component={AlbumPage} />
                        <Route exact path={pageURL + "/PlaylistPage"} component={PlaylistPage} />
                    </Switch>
                </AuthenticationContext.Provider>
            </main>
        )
    }
}
