import { AuthToken } from "../Models/Authentication"
import { Spotify } from "../Models/SpotifyObjects/PlayerObjects"

async function waitForSpotify() : Promise<typeof Spotify> {
    return new Promise((resolve) => {
        if (window.Spotify) {
            resolve(window.Spotify)
        }
        else {
            window.onSpotifyWebPlaybackSDKReady = () => {
                resolve(window.Spotify)
            }
        }
    })
}

export async function getSpotifyPlayer(token: AuthToken) {
    const { Player } = await waitForSpotify()

    const playerInit : Spotify.PlayerInit = {
        name: "SomeTool",
        getOAuthToken: callback => {
            callback(token.access_token)
        },
        volume: .5
    }

    return new Player(playerInit)
}