import React from "react"
import Navbar from "./Navbar"
import { authEndpoint, clientId, redirectUri } from "../../Constants/Constants"
//to view Spotify login API steps head to: https://developer.spotify.com/documentation/general/guides/authorization-guide/
export default function LandingPage() {
    return (
        <div>
            <h2>Spotify Playlist Plus</h2>
            <Navbar></Navbar>
            <a href={authEndpoint+"?client_id=" + clientId + "&response_type=code&redirect_uri=" + redirectUri}><button>Spotify Login</button></a> 
        </div>
    )
}