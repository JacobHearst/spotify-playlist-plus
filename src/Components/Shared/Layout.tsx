import React from "react"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import { AuthenticationContext, AuthenticationContextObject } from "../../Models/Authentication"

export default class Layout extends React.Component<{children: PropTypes.ReactNodeArray}, {}> {
    render() {
        return (
            <AuthenticationContext.Consumer>
                {(context?: AuthenticationContextObject) => {
                    const loggedInView = (
                        <React.Fragment>
                            <Navbar />
                            <button onClick={() => context?.logOut()}>Log out</button>
                        </React.Fragment>
                    )

                    return (
                        <React.Fragment>
                            {context && context.authToken ? loggedInView : undefined}
                            {this.props.children}
                        </React.Fragment>
                    )
                }}
            </AuthenticationContext.Consumer>
        )
    }
}