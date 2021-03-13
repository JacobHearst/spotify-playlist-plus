import React from "react"
import { Button } from "react-bootstrap"
import { TrackSymbols } from "../../Constants/Symbols"
import * as PlayerEndpoints from "../../Endpoints/Player"
import { AuthenticationContext } from "../../Models/Authentication"
import { Spotify } from "../../Models/SpotifyObjects/PlayerObjects"

interface PlayerButtonProps {
    uris: string[]
    updateCurrentlyPlayingCallback(trackNumber: number): void
    index: number
    currentlyPlaying?: boolean
}

interface PlayerButtonState extends PlayerButtonProps {}

export default class PlayerButton extends React.Component<PlayerButtonProps, PlayerButtonState> {
    constructor(props: PlayerButtonProps) {
        super(props)

        this.state = {
            ...props,
        }

        this.playerButtonClicked = this.playerButtonClicked.bind(this)
    }

    async playerButtonClicked(player: Spotify.SpotifyPlayer) {
        this.props.currentlyPlaying ? PlayerEndpoints.pause() : PlayerEndpoints.startResume(player._options.id, this.state.uris)

        this.props.updateCurrentlyPlayingCallback(this.props.index)
    }

    render() {
        return (
            <AuthenticationContext.Consumer>
                {(context) => (
                    <Button variant="outline-dark" onClick={() => this.playerButtonClicked(context?.player!)}>
                        {this.props.currentlyPlaying ? TrackSymbols.Pause : TrackSymbols.Play}
                    </Button>
                )}
            </AuthenticationContext.Consumer>
        )
    }
}
