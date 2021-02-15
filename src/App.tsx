import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlaylistPage from "./Components/Pages/Playlist/PlaylistPage"
import { PlaylistObject } from "./Models/SpotifyObjects/PlaylistObjects"
import { AlbumObject, AlbumType } from "./Models/SpotifyObjects/AlbumObjects"
import AlbumPage from "./Components/Pages/Album/AlbumPage"

export default class App extends React.Component {
    render() {
        const mockPlaylist: PlaylistObject = {
            description: "My playlist description",
            href: "",
            id: "",
            images: [],
            name: "My playlist name",
            owner: { display_name: "Jacob Hearst", href: "", id: "", images: [] },
            public: true,
            tracks: []
        }

        const mockAlbum: AlbumObject = {
            album_type: AlbumType.Album,
            artists: [],
            genres: ["genre"],
            href: "href",
            id: Math.random().toString(),
            images: [],
            label: "label",
            name: "My Album Name",
            popularity: 100,
            tracks:[],
            release_date: "2021"

        }

        return (
             
            <div className="App">
                <PlaylistPage playlist={mockPlaylist}/>
                <AlbumPage album = {mockAlbum}/>
                
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}
