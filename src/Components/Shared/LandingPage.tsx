import React, { ReactNode, useContext } from "react"
import Navbar from "./Navbar"
import { AuthenticationContext, AuthenticationContextObject } from "../../Models/Authentication"
import { authEndpoint, clientId, redirectUri } from "../../Constants/Constants"
import { RouteProps } from "../../Models/RouteObjects"

//to view Spotify login API steps head to: https://developer.spotify.com/documentation/general/guides/authorization-guide/

export default function LandingPage(props: RouteProps) {
    var context = useContext(AuthenticationContext)

    // True => redirecting back after logging in
    if (props.location.search !== "") {
        const token = new URLSearchParams(props.location.search).get("code")

        // can't use '!' for some reason. gotta check the old fashion way or else typescript throws a fit :(
        if (token && context) {
            context.authObj.access_token = token
        }
    }

    return (
        <div>
            <h2>Spotify Playlist Plus</h2>
            <Navbar></Navbar>
            {loggedIn(context) ? <div></div> : logInButton()}
        </div>
    )
}

function loggedIn(context: AuthenticationContextObject | undefined): Boolean {
    return !!(context?.authObj.access_token ?? false)
}

function logInButton(): ReactNode {
    return (
        <a href={authEndpoint + "?client_id=" + clientId + "&response_type=code&redirect_uri=" + redirectUri}>
            <button>Spotify Login</button>
        </a>
    )
}
