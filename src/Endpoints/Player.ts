import axiosInstance from "./AxiosConfig"

const basePlaybackURL = "https://api.spotify.com/v1/me/player"

export function getPlaybackInformation() {
    axiosInstance.get(basePlaybackURL)
        .then((response) => {
            return response
        })
}

export function startResume() {
    axiosInstance.put(`${basePlaybackURL}/play`)
}

export function pause() {
    axiosInstance.put(`${basePlaybackURL}/pause`)
}