import React from "react"
import { AuthenticationContext } from "../../../Models/Authentication"
import Navbar from "../../Shared/Navbar"
import SearchBar from "../../Shared/SearchBar"

export default class HomePage extends React.Component {
    static contextType = AuthenticationContext

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <button className="log-out" onClick={this.context.logOut}>
                        Log out
                    </button>
                    <div className="home-page">
                        <SearchBar onSearchSelect={() => {}} artist={true} album={true} track={true} playlist={true} />
                    </div>
                </div>
                {/* 
                <div className="home-page">
                    <SearchBar onSearchSelect={() => {}} />
                    <button className="log-out" onClick={this.context.logOut}>
                        Log out
                    </button>
                </div> */}
            </React.Fragment>
        )
    }
}
