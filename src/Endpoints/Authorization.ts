import { AuthToken } from "../Models/Authentication"
import axios from "axios"

export async function getAuthenticationTokenFromCode(data: any): Promise<AuthToken | undefined> {
    const response = await axios.post("https://accounts.spotify.com/api/token", null, {
        params: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })

    return response.data
}