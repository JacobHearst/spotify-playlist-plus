import { AuthToken } from "../Models/Authentication"
import axios from "axios"
import { RefreshTokenRequest, GetTokenRequest } from "../Models/Requests/AuthenticationRequests"

export async function getAuthenticationToken(data: RefreshTokenRequest | GetTokenRequest): Promise<AuthToken | undefined> {
    const response = await axios.post("https://accounts.spotify.com/api/token", null, {
        params: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })

    return response.data
}