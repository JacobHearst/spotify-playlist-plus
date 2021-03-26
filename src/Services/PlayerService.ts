import { AuthToken } from "../Models/Authentication"
import { Spotify } from "../Models/SpotifyObjects/PlayerObjects"
import { PlaylistObject } from "../Models/SpotifyObjects/PlaylistObjects"
import TrackService from "./TrackService"

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

export async function intensityShuffle(playlist: PlaylistObject, decreasing: boolean): Promise<string[]> {
    const tracks = playlist.tracks.map(({ track }) => track)
    const audioFeatures = await TrackService.getAudioFeatures(tracks)
    console.log(audioFeatures)

    const sorted = audioFeatures?.sort((a, b) => a.energy - b.energy)
    if (!sorted) {
        return []
    }

    if (decreasing) {
        sorted.reverse()
    }

    return sorted.map(({ uri }) => uri)
}