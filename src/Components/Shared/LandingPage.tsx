import React, { ReactNode } from "react"
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
// We're using the Auth code with PKCE flow
function logInButton(): ReactNode {
    return (
        <AuthenticationContext.Consumer>
            {(context) => {
                let href = undefined
                if (context && context.tokenRetriever) {
                    href = context.tokenRetriever.redirect_url
                }

                return (
                    <a href={href}>
                        <button disabled={!href}>Spotify Login</button>
                    </a>
                )
            }}
        </AuthenticationContext.Consumer>
    )
}
