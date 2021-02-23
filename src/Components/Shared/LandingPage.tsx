import React, { ReactNode } from "react"
import { authEndpoint, clientId, config } from "../../Constants/Constants"

export default function LandingPage() {
    return (
        <div>
            <h2>Spotify Playlist Plus</h2>
            {logInButton()}
        </div>
    )
}
// To view Spotify login API steps head to: https://developer.spotify.com/documentation/general/guides/authorization-guide/
// We're using the Implicit Grant flow
function logInButton(): ReactNode {
    return (
        <a href={authEndpoint + "?client_id=" + clientId + "&response_type=token&redirect_uri=" + config.redirectUri}>
            <button>Spotify Login</button>
        </a>
    )
}
