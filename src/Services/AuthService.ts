import { authEndpoint, clientId, config } from "../Constants/Constants"
import { getAuthenticationToken } from "../Endpoints/Authorization"
import { AuthToken } from "../Models/Authentication"
import { GetTokenRequest } from "../Models/Requests/AuthenticationRequests"

// class that handles all authentication
export default class AuthService {
    // scopes that are needed 
    static scopes : string[] = ["user-modify-playback-state", "user-read-playback-state", "streaming", 
        "user-read-email", "user-read-private"]

    constructor() {}

    // ########################## Cookie Creation / Retrival ###############################
    static createCodeVerifierCookie(): string {
        const verifier = this.randomString()
        document.cookie = `code_verifier=${verifier}`

        return verifier
    }

    static getVerifierCookie(): string | undefined {
        // document.cookie is a 'string' representation of the cookies, seperated by '; '
        const cookies = document.cookie.split("; ") // # yum
    
        // find the cookie that starts with code_verifier
        const verifier = cookies.filter((cookie) => cookie.startsWith("code_verifier"))
    
        // if it exists, return it
        return verifier.length > 0 ? verifier[0].split("=")[1] : undefined
    }
    // ####################################################################################


    // ############## Verifier / Authorization URL Creation ##############################
    static async constructAuthorizationURI(verifier: string): Promise<string> {
        const scopeString : string = this.scopes.join(" ")

        let url = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${config.redirectUri}&scope=${encodeURIComponent(scopeString)}`

        const hash = await this.sha256(verifier)
        const code_challenge = this.base64urlencode(hash)

        url += `&code_challenge_method=S256&code_challenge=${code_challenge}`

        return url
    }  

    static randomString() : string {
        let randomString : string = ""

        // has to be between 43 - 128 according to spotify
        const minCharacters = 43

        // initalize array of length 43 and generate random values
        const randomNumbers = new Uint8Array(minCharacters)
        window.crypto.getRandomValues(randomNumbers)

        // possible characters [A-Z], [a-z], [0-9]
        // could also include certain characters if we wanted to make it even more secure 
        const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        // going to need to convert bytes to value between 0 - possibleCharcters.length
        const byteLength = 256
        const offset = byteLength / possibleCharacters.length

        for (var i = 0; i < minCharacters; i++) {
            randomString += possibleCharacters[Math.floor(Math.abs(randomNumbers[i]) / offset)]
        }

        return randomString
    }

    static sha256(verifier: string) {
        const encoder = new TextEncoder()
        const data = encoder.encode(verifier)
    
        return window.crypto.subtle.digest("SHA-256", data)
    }

    static base64urlencode(hash: ArrayBuffer) {
        const values : Uint8Array = new Uint8Array(hash)

        // return encoded string
        // replace '+' with '-', '/' with '_', and remove '=' at end for url safety
        return btoa(String.fromCharCode.apply(null, values as unknown as number[]))
            .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    }

    // ###############################################################################################


    // ########################### Token Retrievers ##################################################

    /* eslint-disable */
    // Disable esline or else typescript will complain about the callback signature
    static async refreshTimer(token: AuthToken, callback: (newToken: AuthToken) => any) {
        // refresh 5 seconds before the token expires
        const msBeforeExpires = 5000
        const expireTimeInMs = token.expires_in * 1000
        const refreshTime = expireTimeInMs - msBeforeExpires

        setTimeout(async () => {
            const newToken: AuthToken | undefined = await getAuthenticationToken({
                grant_type: "refresh_token",
                refresh_token: token.refresh_token,
                client_id: clientId
            })

            if (newToken) {
                callback(newToken)
            }

        }, refreshTime)
    }
    /* eslint-enable */

    static exchangeCodeForToken(code: string, verifier: string) {      
        const data : GetTokenRequest = {
            client_id: clientId,
            grant_type: "authorization_code",
            code: code,
            redirect_uri: config.redirectUri,
            code_verifier: verifier
        } 

        return getAuthenticationToken(data)
    } 

    // ###############################################################################################
}
