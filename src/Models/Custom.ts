import { SimplifiedAlbumObject } from "./SpotifyObjects/AlbumObjects"
import { ArtistObject } from "./SpotifyObjects/ArtistObjects"
import { SimplifiedPlaylistObject } from "./SpotifyObjects/PlaylistObjects"
import { TrackObject } from "./SpotifyObjects/TrackObjects"

export type searchTypes = "artist" | "playlist" | "track" | "album"
export type items = ArtistObject | SimplifiedAlbumObject | TrackObject | SimplifiedPlaylistObject
export type responseItems = "artists" | "playlists" | "tracks" | "albums"