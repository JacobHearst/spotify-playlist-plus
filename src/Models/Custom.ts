import { SimplifiedAlbumObject } from "./SpotifyObjects/AlbumObjects"
import { ArtistObject } from "./SpotifyObjects/ArtistObjects"
import { SimplifiedPlaylistObject } from "./SpotifyObjects/PlaylistObjects"
import { TrackObject } from "./SpotifyObjects/TrackObjects"

export type SearchTypes = "artist" | "playlist" | "track" | "album"
export type ResponseObjects = ArtistObject | SimplifiedAlbumObject | TrackObject | SimplifiedPlaylistObject
export type ResponseItems = "artists" | "playlists" | "tracks" | "albums"