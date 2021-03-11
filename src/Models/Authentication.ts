import React from "react"
import { Spotify }  from "../Models/SpotifyObjects/PlayerObjects"

export interface AuthToken {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
}

export interface TokenRetriever {
    verifier: string,
    redirect_url: string
}

export interface AuthenticationContextObject {
    authToken?: AuthToken,
    player?: Spotify.SpotifyPlayer,
    tokenRetriever?: TokenRetriever,
    logOut: () => void
}

export const AuthenticationContext = React.createContext<AuthenticationContextObject | undefined>(undefined)
