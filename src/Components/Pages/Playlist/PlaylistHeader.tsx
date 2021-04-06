import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"
import { msToSentence } from "../../../Services/Utility"

interface PlaylistHeaderProps {
    playlist?: PlaylistObject
}

interface PlaylistHeaderState extends PlaylistHeaderProps {}

export default class PlaylistHeader extends React.Component<PlaylistHeaderProps, PlaylistHeaderState> {
    constructor(props: PlaylistHeaderProps) {
        super(props)
        this.state = {
            ...props,
        }
    }

    render() {
        if (!this.props.playlist) {
            return <p>Loading</p>
        }

        const { name, description, owner, tracks } = this.props.playlist!

        let playlistLength = 0
        tracks.forEach(({ track }) => (playlistLength += track.duration_ms))

        return (
            <Row style={{ marginBottom: 15 }}>
                {/* Header */}
                <Col xs="auto">
                    {/* Image size can be up to 640 by 640 */}
                    <Image src={this.props.playlist!.images[0].url} width={250} height={250} style={{ border: "1px solid black" }} />
                </Col>
                <Col>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Owned by: {owner.display_name}</p>
                    <p>
                        {tracks.length} Songs. {msToSentence(playlistLength)}
                    </p>
                </Col>
            </Row>
        )
    }
}
