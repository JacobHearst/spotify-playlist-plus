import React from "react"
import { Link } from "react-router-dom"
import { SimplifiedArtistObject } from "../../Models/SpotifyObjects/ArtistObjects"

interface ArtistLinksProps {
    artists: SimplifiedArtistObject[]
}

export default class ArtistLinks extends React.Component<ArtistLinksProps, {}> {
    render() {
        return this.props.artists.map((artist: any, index: number, array: any[]) => {
            if (index == array.length - 1) {
                // Don't put a comma and space after the last artist
                return (
                    <Link key={artist.id} to={`/Artist/${artist.id}`}>
                        {artist.name}
                    </Link>
                )
            }

            return (
                <span key={artist.id}>
                    <Link to={`/Artist/${artist.id}`}>{artist.name}</Link>,&nbsp;
                </span>
            )
        })
    }
}
