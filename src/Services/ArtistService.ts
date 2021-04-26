import ArtistEndpoints from "../Endpoints/Artists"
import { ArtistObject } from "../Models/SpotifyObjects/ArtistObjects"
import { TrackObject } from "../Models/SpotifyObjects/TrackObjects"

export default class ArtistService {
    static async getArtist(id: string): Promise<ArtistObject | undefined> {
        const response = await ArtistEndpoints.getArtistById(id)
        if (!response) {
            return
        }

        return response.data
    }

    static async getArtistTopTracks({ id }: ArtistObject): Promise<TrackObject[] | undefined> {
        const response = await ArtistEndpoints.getArtistTopTracks(id)
        if (!response) {
            return
        }

        return response.data.tracks
    }

    static async getArtistAlbums(id: string) {
        return ArtistEndpoints.getArtistAlbums(id)
            .then(({ data: { items }}) => items)
            .catch((reason) => console.error(`Failed to get albums for artist with id: '${id}'. ${reason}`))
    }
}