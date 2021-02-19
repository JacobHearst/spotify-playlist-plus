import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { Container } from "react-bootstrap"

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
        const artistImages = images.map((image, index) => {
            return <Image src={image.url} key={index} className="artistImage"></Image>
        })

        return (
            <Container>
                <Row>
                    <div className="artistImageCollage">{artistImages}</div>
                </Row>
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
