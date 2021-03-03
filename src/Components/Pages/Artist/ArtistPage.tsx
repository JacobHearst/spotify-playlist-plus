import React from "react"
import { Badge, Col, Image, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { match } from "react-router-dom"

import { ArtistObject } from "../../../Models/SpotifyObjects/ArtistObjects"
import { TrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import ArtistService from "../../../Services/ArtistService"
import Navbar from "../../Shared/Navbar"
import TrackTable from "../../Shared/TrackList/TrackTable"

interface ArtistPageProps {
    match: match<{ id: string }>
}

interface ArtistPageState {
    artist?: ArtistObject,
    topTracks?: TrackObject[],
    artistId: string
}

export default class ArtistPage extends React.Component<ArtistPageProps, ArtistPageState> {
    constructor(props: ArtistPageProps) {
        super(props)
        this.state = {
            artistId: props.match.params.id
        }

        this.loadArtist = this.loadArtist.bind(this)
        this.loadTopTracks = this.loadTopTracks.bind(this)
        this.loadArtist()
    }

    loadArtist() {
        ArtistService.getArtist(this.state.artistId).then((artist) => {
            if (artist) {
                this.setState({ ...this.state, artist })
                this.loadTopTracks(artist)
            } else {
                // Error happened, check console. In future, display error to user?
            }
        }).catch(error => console.error(error))
    }

    loadTopTracks(artist: ArtistObject) {
        console.log("Loading top tracks")
        ArtistService.getArtistTopTracks(artist).then((topTracks) => {
            console.log("Top tracks: ", topTracks)
            if (topTracks) {
                this.setState({ ...this.state, topTracks })
            }
        })
    }

    render() {
        if (!this.state.artist) {
            return (
                <React.Fragment>
                    <Navbar/>
                    <p>Loading Artist</p>
                </React.Fragment>
            )
        }

        const { genres, images, name, popularity } = this.state.artist
        const coverImages = {
            sm: images.find(image => image.height === 160),
            md: images.find(image => image.height === 320),
            lg: images.find(image => image.height === 640),
        }

        const coverImage = coverImages.md ?? coverImages.lg ?? coverImages.sm
        const genreBadges = genres.map((genre) => (
            <Badge key={genre} style={{marginRight: 5}} variant="secondary">{genre}</Badge>
        ))

        return (
            <Container fluid>
                <Navbar />
                {coverImage ?
                    <Image src={coverImage.url} />
                    : <p>Loading Image</p>
                }
                <Row>
                    <Col>
                        <h2>{name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {genreBadges}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Popularity: {popularity}th Percentile</p>
                    </Col>
                </Row>
                <Row>
                    <h3>Top Tracks</h3>
                    <TrackTable tracks={this.state.topTracks} />
                </Row>
            </Container>
        )
    }
}
