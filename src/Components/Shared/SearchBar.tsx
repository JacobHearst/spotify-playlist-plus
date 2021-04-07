import React from "react"
import { InputGroup, Dropdown, FormControl, Form } from "react-bootstrap"
import DropdownButton from "react-bootstrap/DropdownButton"
import { GetSearchResults } from "../../Endpoints/Search"

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { ArtistObject } from "../../Models/SpotifyObjects/ArtistObjects"
import { SimplifiedAlbumObject } from "../../Models/SpotifyObjects/AlbumObjects"
import { TrackObject } from "../../Models/SpotifyObjects/TrackObjects"
import { SimplifiedPlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import { ResponseObjects, ResponseItems, SearchTypes } from "../../Models/Custom"
import { createQuery } from "../../Services/SearchService"

interface SearchBarProps {
    artist?: boolean
    playlist?: boolean
    track?: boolean
    album?: boolean
    // eslint-disable-next-line no-unused-vars
    onSearchSelect(item: ResponseObjects): void
}

interface SearchBarState {
    items?: (ArtistObject | SimplifiedAlbumObject | TrackObject | SimplifiedPlaylistObject)[]
    searchVal: string
    types: {
        artist: boolean
        playlist: boolean
        track: boolean
        album: boolean
    }
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props)

        this.state = {
            searchVal: "",
            types: {
                artist: props.artist ?? false,
                playlist: props.playlist ?? false,
                track: props.track ?? false,
                album: props.album ?? false,
            },
        }

        this.search = this.search.bind(this)
        this.onRecordSelect = this.onRecordSelect.bind(this)
    }

    search(e: React.KeyboardEvent): void {
        if (e.key !== "Enter") {
            return
        }

        const typesToSearch = Object.keys(this.state.types).filter((t) => this.state.types[t as SearchTypes])
        const searchVal = (e.target as HTMLInputElement).defaultValue

        GetSearchResults(createQuery(searchVal, typesToSearch)).then((searchResponseItems) => {
            this.setState({
                ...this.state,
                items: searchResponseItems,
            })
        })
    }

    onRecordSelect(index: number): void {
        this.props.onSearchSelect(this.state.items![index])
    }

    render() {
        const searchItems = this.state.items?.map((obj, i) => {
            return (
                <li key={i}>
                    <button onClick={() => this.onRecordSelect(i)}>{obj.name}</button>
                </li>
            )
        })

        return (
            <div className="search-bar">
                <InputGroup>
                    <DropdownButton title="Filter" className="filter-dropdown">
                        <Dropdown.Divider></Dropdown.Divider>
                        <Form.Check
                            inline
                            disabled={!this.props.album}
                            checked={this.state.types.album}
                            label="Album"
                            onChange={() => {
                                this.setState({ types: { ...this.state.types, album: !this.state.types.album } })
                            }}
                        />
                        <Form.Check
                            inline
                            disabled={!this.props.artist}
                            checked={this.state.types.artist}
                            label="Artist"
                            onChange={() => {
                                this.setState({ types: { ...this.state.types, artist: !this.state.types.artist } })
                            }}
                        />
                        <Form.Check
                            inline
                            disabled={!this.props.playlist}
                            checked={this.state.types.playlist}
                            label="Playlist"
                            onChange={() => {
                                this.setState({ types: { ...this.state.types, playlist: !this.state.types.playlist } })
                            }}
                        />
                        <Form.Check
                            inline
                            disabled={!this.props.track}
                            checked={this.state.types.track}
                            label="Track"
                            onChange={() => {
                                this.setState({ types: { ...this.state.types, track: !this.state.types.track } })
                            }}
                        />
                    </DropdownButton>
                    <FormControl
                        as="input"
                        placeholder="Search"
                        value={this.state.searchVal}
                        onKeyDown={this.search}
                        onChange={(e) => this.setState({ ...this.state, searchVal: e.target.value })}
                    />
                </InputGroup>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="search-results-toggle__button" eventKey="0" onSelect={() => {}}>
                            &#10225;
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ul>{searchItems}</ul>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}