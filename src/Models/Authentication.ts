import React from "react"

export class TokenWatcher {
    currentToken: string
    token_type: string
    expires_in: number

    constructor(currentToken: string, token_type: string, expires_in: number) {
        this.currentToken = currentToken
        this.token_type = token_type
        this.expires_in = expires_in
        this.startWatching()
    }

    startWatching() {
        console.log("Watching token")
    }
}

export interface AuthenticationContextObject {
    tokenWatcher?: TokenWatcher,
    logOut: () => void
}

export const AuthenticationContext = React.createContext<AuthenticationContextObject | undefined>(undefined)
