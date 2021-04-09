import React from "react"
import { Card } from "react-bootstrap"
import { SimplifiedTrackObject } from "../../../Models/SpotifyObjects/TrackObjects"
import UserService from "../../../Services/UserService"
import ArtistLinks from "../../Shared/ArtistLinks"

interface HomePageState {
    recentTracks: SimplifiedTrackObject[]
}

export default class HomePage extends React.Component<{}, HomePageState> {
    constructor(props: {}) {
        super(props)
        UserService.getRecentTracks(10)
            .then((recentTracks) => {
                this.setState({ ...this.state, recentTracks })
            })
            .catch((error) => {
                console.error(error)
            })

        this.state = {
            recentTracks: [],
        }
    }

    render() {
        const trackCards = this.state.recentTracks.map((track) => (
            <Card key={track.id} className="p-3 m-3 d-inline-block">
                <Card.Body>
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text className="text-muted">
                        By:&nbsp;
                        <ArtistLinks artists={track.artists} />
                    </Card.Text>
                </Card.Body>
            </Card>
        ))

        return (
            <React.Fragment>
                <h3>Recently listened to:</h3>
                <div className="w-100" style={{ overflowX: "auto" }}>
                    {trackCards}
                </div>
                <hr />
            </React.Fragment>
        )
    }
}
