import React from "react"
import { Col, Row, Image, Jumbotron } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SimplifiedAlbumObject } from "../../../Models/SpotifyObjects/AlbumObjects"
import { ArtistObject } from "../../../Models/SpotifyObjects/ArtistObjects"
import ArtistService from "../../../Services/ArtistService"

interface ArtistAlbumListProps {
    artist?: ArtistObject
}

interface ArtistAlbumListState {
    albums: SimplifiedAlbumObject[]
}

export default class ArtistAlbumList extends React.Component<ArtistAlbumListProps, ArtistAlbumListState> {
    constructor(props: ArtistAlbumListProps) {
        super(props)
        this.state = {
            albums: []
        }
        
        this.loadAlbums = this.loadAlbums.bind(this)
        if (this.props.artist) {
            this.loadAlbums(this.props.artist)
        }
    }

    loadAlbums(artist: ArtistObject) {
        ArtistService.getArtistAlbums(artist.id).then(albums => {
            if (albums) {
                this.setState({ ...this.state, albums })
            }
        })
    }

    render() {
        if (!this.props.artist) {
            // Defer to parent component loading message
            return undefined
        }


        return (
            <Jumbotron className="pt-3">
                <h2>Discography</h2>
                <Row>
                    {
                        this.state.albums.map(({ images, id, name, release_date, album_type }) => {
                            console.log(album_type)
                            const releaseYear = release_date.split("-")[0]
                            const coverImages = {
                                sm: images.find((image) => image.height === 160),
                                md: images.find((image) => image.height === 320),
                                lg: images.find((image) => image.height === 640),
                            }
                            const coverImage = coverImages.sm ?? coverImages.md ?? coverImages.lg
                            const coverUrl = coverImage ? coverImage.url : "https://place-hold.it/320"

                            return (
                                <Col key={id} sm={2}>
                                    <Link to={`/spotify-playlist-plus/Album/${id}`}>
                                        <Image src={coverUrl} height="150px" />
                                        <p style={{ textAlign: "center", fontSize: "smaller" }}>{name} ({releaseYear})</p>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Jumbotron>
        )
    }
}