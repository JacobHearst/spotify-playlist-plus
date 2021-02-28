import { TokenWatcher } from "../Models/Authentication"
const axios = require("axios")

export async function getAuthenticationTokenFromCode(data : any): Promise<TokenWatcher | undefined> {
    let watcher = <TokenWatcher>{}

    await axios.post("https://accounts.spotify.com/api/token", null, {
        params: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })
        .then((response : any) => {            
            watcher = {
                ...response.data
            }
        })
    
    return watcher
}