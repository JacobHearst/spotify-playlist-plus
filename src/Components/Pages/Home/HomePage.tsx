import React from "react"
import { AuthenticationContext } from "../../../Models/Authentication"

export default class HomePage extends React.Component {
    static contextType = AuthenticationContext

    render() {
        return (
            <React.Fragment>
                <h1>Home page</h1>
            </React.Fragment>
        )
    }
}