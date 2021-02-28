import { authEndpoint, clientId, redirectUri } from "../Constants/Constants"
import { getAuthenticationTokenFromCode } from "../Endpoints/Authorization"

// Service used for retrieval of athorization. Maybe could've made a class for this? 

// creates a new cookie for the code verifier and returns it
export function createCodeVerifierCookie(): string {
    const verifier = randomString()
    document.cookie = `code_verifier=${verifier}`

    return verifier
}

// middle man function for exchanging code for token. 
// Success: will return a new TokenWatcher obj
// Fail: will return undefined
export function exchangeCodeForToken(code: string, verifier: string) {      
    const data = {
        client_id: clientId,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        code_verifier: verifier
    } 

    return getAuthenticationTokenFromCode(data)
} 

// Creates and returns URL for step 1 of PKCE authorization
export async function constructAuthorizationURI(verifier: string): Promise<string> {
    let url = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`

    const hash = await sha256(verifier)
    const code_challenge = base64urlencode(hash)

    url += `&code_challenge_method=S256&code_challenge=${code_challenge}`

    return url
}   

// generates a cryptographic random string 
function randomString() : string {
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

// returns raw bytes of sha256 hashed string
function sha256(verifier: string) {
    const encoder = new TextEncoder()
    const data = encoder.encode(verifier)
  
    return window.crypto.subtle.digest("SHA-256", data)
}

// returns a base64 encoded string from array buffer
function base64urlencode(hash: ArrayBuffer) {
    const values : Uint8Array = new Uint8Array(hash)

    // return encoded string
    // replace '+' with '-', '/' with '_', and remove '=' at end for url safety
    return btoa(String.fromCharCode.apply(null, values as unknown as number[]))
        .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}