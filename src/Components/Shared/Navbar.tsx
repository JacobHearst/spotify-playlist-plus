import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar() {
    const pageURL = "/spotify-playlist-plus"
    return (
        <div className="float-right">
            <Link className="p-2" to={pageURL}>
                <Button size="sm" variant="outline-primary">Home</Button>
            </Link>
            <Link className="p-2" to={pageURL+"/AlbumPage"}>
                <Button size="sm" variant="outline-primary">Album Page</Button>
            </Link>
            <Link className="p-2" to={pageURL + "/artist/4V8LLVI7PbaPR0K2TGSxFF"}>
                <Button size="sm" variant="outline-primary">Artist Page</Button>
            </Link>
            <Link className="p-2" to={pageURL + "/playlist/37i9dQZF1DZ06evO2QRN3G"}>
                <Button size="sm" variant="outline-primary">Playlist Page</Button>
            </Link>
        </div>      
    )
}