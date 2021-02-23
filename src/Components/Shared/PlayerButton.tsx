import React from "react"
import { Button } from "react-bootstrap"
import { TrackSymbols } from "../../Constants/Symbols"
import * as PlayerEndpoints from "../../Endpoints/Player"

interface PlayerButtonProps {
    currentlyPlaying: Boolean
}

interface PlayerButtonState extends PlayerButtonProps {}

export default class PlayerButton extends React.Component<PlayerButtonProps, PlayerButtonState> {
    constructor(props: PlayerButtonProps) {
        super(props)

        this.state = {
            ...props,
        }
    }

    playerButtonClicked() {
        this.state.currentlyPlaying ? PlayerEndpoints.pause() : PlayerEndpoints.startResume()

        this.setState({
            currentlyPlaying: !this.state.currentlyPlaying,
        })
    }

    // TODO: Change Unicode to .svg's or some other format that can be styled. Good for now tho
    render() {
        return (
            <Button variant="outline-dark" onClick={this.playerButtonClicked}>
                {this.props.currentlyPlaying ? TrackSymbols.Pause : TrackSymbols.Play}
            </Button>
        )
    }
}
