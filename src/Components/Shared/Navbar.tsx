import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const pageURL = "/spotify-playlist-plus"
    return (
        <div className="navBar">
            <Link to={pageURL}>Home </Link>
            <Link to={pageURL + "/AlbumPage"}>Album Page </Link>
            <Link to={pageURL + "/artist/a"}>Artist Page</Link>
            <Link to={pageURL + "/playlist/a"}>Playlist Page </Link>
        </div>
    )
}
