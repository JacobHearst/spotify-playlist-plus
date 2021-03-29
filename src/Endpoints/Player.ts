import axiosInstance from "./AxiosConfig"
import { StartResumeRequest } from "../Models/Requests/PlayerRequests"
import { GetPlaybackInfoResponse } from "../Models/Responses/PlayerResponse"
import { DeviceObject } from "../Models/SpotifyObjects/SharedObjects"

const basePlaybackURL = "https://api.spotify.com/v1/me/player"

export default class PlayerEndpoints {
    static async getPlaybackInformation(): Promise<GetPlaybackInfoResponse> {
        const response: GetPlaybackInfoResponse = await axiosInstance.get(basePlaybackURL)
        return response
    }

    static startResume(device_id: string, uris: string[]) {
        const data: StartResumeRequest = {
            uris: uris
        }

        axiosInstance.put(`${basePlaybackURL}/play?device_id=${device_id}`, data)
    }

    static pause() {
        axiosInstance.put(`${basePlaybackURL}/pause`)
    }
}

// eslint-disable
// used these before implementing the sdk. They shouldn't be used unless we 
// would want to allow the user to transfer playback to another device and continue listening
async function getAvailableDevices() {
    const devices: DeviceObject[] = (await axiosInstance.get(`${basePlaybackURL}/devices`)).data.devices
    return devices
}

async function transferPlayback(device_id: string) {
    await axiosInstance.put(`${basePlaybackURL}`, { device_ids: [device_id] })
}