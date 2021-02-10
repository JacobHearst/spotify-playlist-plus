import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default class App extends React.Component {
    render() {
        /*const mockPlaylist: PlaylistObject = {
            description: "My playlist description",
            href: "",
            id: "",
            images: [],
            name: "My playlist name",
            owner: { display_name: "Jacob Hearst", href: "", id: "", images: [] },
            public: true,
            tracks: []
        }*/

        return (
            // <PlaylistPage playlist={mockPlaylist}/>
            <div className="App">
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
