export interface GetTokenRequest {
    client_id: string,
    grant_type: string,
    code: string,
    redirect_uri: string,
    code_verifier: string
}

export interface RefreshTokenRequest {
    grant_type: string,
    refresh_token: string,
    client_id: string
}