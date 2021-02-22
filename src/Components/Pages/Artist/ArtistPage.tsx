import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"

import { ArtistObject } from "../../../Models/SpotifyObjects/ArtistObjects"

interface ArtistPageProps {
    artist: ArtistObject
}

interface ArtistPageState extends ArtistPageProps {}

export default class ArtistPage extends React.Component<ArtistPageProps, ArtistPageState> {
    constructor(props: ArtistPageProps) {
        super(props)
        this.state = {
            ...props,
        }
    }

    render() {
        const { genres, href, id, images, name, popularity } = this.state.artist
        const carouselItems = images.map((image, index) => {
            return (
                <Carousel.Item interval={1000}>
                    <Image src={image.url} key={index} fluid></Image>
                </Carousel.Item>
            )
        })

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
