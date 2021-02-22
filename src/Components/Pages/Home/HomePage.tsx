import React from "react"
import { AuthenticationContext } from "../../../Models/Authentication"
import Navbar from "../../Shared/Navbar"

export default class HomePage extends React.Component {
    static contextType = AuthenticationContext

    render() {
        return (
            <React.Fragment>
                <p>Home page</p>
                <Navbar/>
                <button onClick={this.context.logOut}>Log out</button>
            </React.Fragment>
        )
    }
}