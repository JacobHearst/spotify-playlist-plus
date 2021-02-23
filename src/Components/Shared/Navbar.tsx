import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const pageURL = "/spotify-playlist-plus"
    return (
        <div>     
            <Link to={pageURL}>Home </Link>
            <Link to={pageURL+"/AlbumPage"}>Album Page </Link>
            <Link to={pageURL + "/playlist/37i9dQZF1DZ06evO2QRN3G"}>Playlist Page </Link>
        </div>      
    )
}