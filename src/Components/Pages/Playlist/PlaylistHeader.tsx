import React from "react"
import { Button, ButtonGroup, Col, Dropdown, Image, Row } from "react-bootstrap"
import PlayerEndpoints from "../../../Endpoints/Player"
import TrackService from "../../../Services/TrackService"
import { CaretDownFill } from "react-bootstrap-icons"
import { AuthenticationContext } from "../../../Models/Authentication"
import { PlaylistObject } from "../../../Models/SpotifyObjects/PlaylistObjects"
import { msToSentence } from "../../../Services/Utility"

interface PlaylistHeaderProps {
    playlist?: PlaylistObject
}

interface PlaylistHeaderState extends PlaylistHeaderProps {}

export default class PlaylistHeader extends React.Component<PlaylistHeaderProps, PlaylistHeaderState> {
    static contextType = AuthenticationContext

    constructor(props: PlaylistHeaderProps) {
        super(props)
        this.state = {
            ...props,
        }

        this.playByIntensity = this.playByIntensity.bind(this)
    }

    playByIntensity(decreasing: boolean = false) {
        if (this.state.playlist && this.context.player) {
            const deviceId = this.context.player._options.id
            const tracks = this.state.playlist.tracks.map(({ track }) => track)
            TrackService.intensitySort(tracks, decreasing).then((tracks) => {
                const uris = tracks.map(({ uri }) => uri)
                PlayerEndpoints.startResume(deviceId, uris)
            })
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
                    <Dropdown as={ButtonGroup}>
                        <Button variant="success" disabled>
                            Play
                        </Button>

                        <Dropdown.Toggle split variant="success">
                            <CaretDownFill />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {/* Is this not just the same as sorting the playlist by intensity and playing it? Shuffle doesn't seem like the right word */}
                            <Dropdown.Item onClick={() => this.playByIntensity()}>Play by intensity (increasing)</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.playByIntensity(true)}>Play by intensity (decreasing)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        )
    }
}
