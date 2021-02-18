import React from "react"
import {Route, Switch, } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import AlbumPage from "./Components/Pages/Album/AlbumPage"
import LandingPage from "./Components/Shared/LandingPage"

export default class App extends React.Component {
    render() {
        const pageURL = "/spotify-playlist-plus"
        return ( 
            <main>
                <Switch>
                    <Route exact path={ pageURL } component={LandingPage}/>
                    <Route exact path={ pageURL + "/AlbumPage"} component={AlbumPage}/>
                    <Route exact path={ pageURL + "/PlaylistPage"} component={PlaylistPage}/>
                </Switch>  
            </main>
        )
    }
}
