import ArtistEndpoints from "../Endpoints/Artists"
import { ArtistObject } from "../Models/SpotifyObjects/ArtistObjects"

export default class ArtistService {
    static async getArtist(id: string): Promise<ArtistObject | undefined> {
        const response = await ArtistEndpoints.getArtistById(id)
        if (!response) {
            return
        }

        return response.data
    }
}