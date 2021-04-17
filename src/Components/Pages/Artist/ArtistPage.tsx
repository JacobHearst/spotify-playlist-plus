import React from "react"
import { Badge, Col, Dropdown, Image, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import { match } from "react-router-dom"
import { SimplifiedAlbumObject } from "../../../Models/SpotifyObjects/AlbumObjects"
import { ArtistObject } from "../../../Models/SpotifyObjects/ArtistObjects"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import ArtistService from "../../../Services/ArtistService"
import TrackTable from "../../Shared/TrackList/TrackTable"
import ArtistAlbumList from "./ArtistAlbums"

interface ArtistPageProps {
    match: match<{ id: string }>
}

interface ArtistPageState {
    artist?: ArtistObject
    topTracks?: TrackObject[]
    artistId: string
    albums?: SimplifiedAlbumObject[]
}

export default class ArtistPage extends React.Component<ArtistPageProps, ArtistPageState> {
    constructor(props: ArtistPageProps) {
        super(props)
        this.state = {
            artistId: props.match.params.id,
        }

        console.log("Constructed artist page")

        this.loadArtist = this.loadArtist.bind(this)
        this.loadTopTracks = this.loadTopTracks.bind(this)
        this.onSearchSelect = this.onSearchSelect.bind(this)
        this.loadArtist()
    }

    loadArtist() {
        ArtistService.getArtist(this.state.artistId)
            .then((artist) => {
                if (artist) {
                    this.setState({ ...this.state, artist })
                    this.loadTopTracks(artist)
                } else {
                    // Error happened, check console. In future, display error to user?
                }
            })
            .catch((error) => console.error(error))
    }

    loadTopTracks(artist: ArtistObject) {
        ArtistService.getArtistTopTracks(artist).then((topTracks) => {
            if (topTracks) {
                this.setState({ ...this.state, topTracks })
            }
        })
    }

    onSearchSelect(artist: ArtistObject) {
        this.setState({
            ...this.state,
            artist: artist,
        })

        this.loadTopTracks(artist)
    }

    render() {
        let body

        if (!this.state.artist) {
            body = (
                <React.Fragment>
                    <p>No Currently Selected Artist. Try searching for one</p>
                </React.Fragment>
            )
        } else {
            const { genres, images, name, popularity } = this.state.artist
            const coverImages = {
                sm: images.find((image) => image.height === 160),
                md: images.find((image) => image.height === 320),
                lg: images.find((image) => image.height === 640),
            }

            const coverImage = coverImages.md ?? coverImages.lg ?? coverImages.sm
            const genreBadges = genres.map((genre) => (
                <Badge key={genre} style={{ marginRight: 5 }} variant="secondary">
                    {genre}
                </Badge>
            ))

            body = (
                <React.Fragment>
                    <Row className="mb-3">
                        <Col sm="3" className="mr-4">
                            {coverImage ? <Image src={coverImage.url} /> : <p>Loading Image</p>}
                        </Col>
                        <Col>
                            <Row>
                                <Col as={"h2"} xs={"auto"}>
                                    {name}
                                </Col>
                                <Col>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="Secondary">
                                            <ThreeDotsVertical />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href={this.state.artist.uri}>Open in Spotify</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col as={"p"}>Genres: {genreBadges}</Col>
                            </Row>
                            <Row>
                                <Col as={"p"}> Popularity: {popularity}th Percentile </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h3>Top Tracks</h3>
                    <TrackTable tracks={this.state.topTracks} />
                    <hr />
                    <ArtistAlbumList artist={this.state.artist} />
                </React.Fragment>
            )
        }

        return (
            <div>
                <Container fluid>{body}</Container>
            </div>
        )
    }
}
