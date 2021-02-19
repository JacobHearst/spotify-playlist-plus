import React from "react"

// all possible authentication properties that can be returned
export interface AuthenticationObject {
    access_token?: string,
    token_type?: string,
    scope?: string,
    expires_in?: number,
    refresh_token?: string
}

export interface AuthenticationContextObject {
    authObj : AuthenticationObject,
}

export const AuthenticationContext = React.createContext<AuthenticationContextObject | undefined>(undefined)
