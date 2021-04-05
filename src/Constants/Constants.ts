export const authEndpoint = "https://accounts.spotify.com/authorize"

export const clientId = "a7d9f2be243d45f69ad9e83e2ef03b61"

const prod = {
    redirectUri: "https://jacobhearst.github.io/spotify-playlist-plus"
}

const dev = {
    redirectUri: "http://localhost:3000/spotify-playlist-plus"
}

export const config = process.env.NODE_ENV == "development" ? dev : prod