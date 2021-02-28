import React, { ReactNode } from "react"
import { authEndpoint, clientId, redirectUri } from "../../Constants/Constants"
import { AuthenticationContext } from "../../Models/Authentication"

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
        <AuthenticationContext.Consumer>
            {(context) => (
                <a href={context?.tokenRetriever?.redirect_url}>
                    <button>Spotify Login</button>
                </a>
            )}
        </AuthenticationContext.Consumer>
    )
}
