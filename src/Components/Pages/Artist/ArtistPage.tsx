import React from "react"
import { Image, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import { match } from "react-router-dom"

import { ArtistObject } from "../../../Models/SpotifyObjects/ArtistObjects"
import ArtistService from "../../../Services/ArtistService"

interface ArtistPageProps {
    match: match<{ id: string }>
}

interface ArtistPageState {
    artist?: ArtistObject,
    artistId: string
}

export default class ArtistPage extends React.Component<ArtistPageProps, ArtistPageState> {
    constructor(props: ArtistPageProps) {
        super(props)
        this.state = {
            artistId: props.match.params.id
        }

        this.loadArtist = this.loadArtist.bind(this)
        this.loadArtist()
    }

    loadArtist() {
        ArtistService.getArtist(this.state.artistId).then((artist) => {
            if (artist) {
                this.setState({ ...this.state, artist })
            } else {
                // Error happened, check console. In future, display error to user?
            }
        })
    }

    render() {
        if (!this.state.artist) {
            return (<p>Loading Artist</p>)
        }

        const { genres, id, images, name, popularity } = this.state.artist
        const carouselItems = images.map((image, index) => (
            <Carousel.Item interval={1000} key={id}>
                <Image src={image.url} key={index} fluid></Image>
            </Carousel.Item>
        ))

        return (
            <Container>
                <Carousel fade={true}>{carouselItems}</Carousel>
                <Row>
                    <h2>{name}</h2>
                </Row>
                <Row>
                    <div>{genres}</div>
                </Row>
                <Row>
                    <div>{popularity}</div>
                </Row>
            </Container>
        )
    }
}
