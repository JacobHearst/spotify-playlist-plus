import React from "react"

export class TokenWatcher {
    currentToken: string
    token_type: string
    expires_in: number
    refresh_token: string

    constructor(currentToken: string, token_type: string, expires_in: number, refresh_token: string) {
        this.currentToken = currentToken
        this.token_type = token_type
        this.expires_in = expires_in
        this.refresh_token = refresh_token
        this.startWatching()
    }

    startWatching() {
        console.log("Watching token")
    }
}

export interface TokenRetriever {
    verifier: string,
    redirect_url: string
}

export interface AuthenticationContextObject {
    tokenWatcher?: TokenWatcher,
    tokenRetriever?: TokenRetriever,
    logOut?: () => void
}

export const AuthenticationContext = React.createContext<AuthenticationContextObject | undefined>(undefined)
