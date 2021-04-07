import React, { ReactNode } from "react"
import { Button, Container } from "react-bootstrap"
import { AuthenticationContext } from "../../Models/Authentication"

export default function LandingPage() {
    return (
        <Container fluid className="text-center mt-5">
            <h2>Spotify Playlist+</h2>
            {logInButton()}
        </Container>
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
                        <Button variant="outline-success" disabled={!href}>Login</Button>
                    </a>
                )
            }}
        </AuthenticationContext.Consumer>
    )
}
