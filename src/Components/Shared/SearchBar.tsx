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
import { searchTypes, items, responseItems } from "../../Models/Custom"

interface SearchBarProps {
    artist?: boolean
    playlist?: boolean
    track?: boolean
    album?: boolean
    // eslint-disable-next-line no-unused-vars
    onSearchSelect(item: items): void
}

interface SearchBarState {
    // items?: Array<items> | undefined
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

        GetSearchResults(this.createQuery()).then((res) => {
            let itms: Array<items> = []

            for (const i in res) {
                if (res[i as responseItems]) {
                    itms = itms.concat(res[i as responseItems]!.items)
                }
            }

            this.setState({
                ...this.state,
                items: itms,
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

    createQuery(): string {
        let query = `q=${this.state.searchVal}`

        if (
            !Object.entries(this.state.types).every((k) => {
                !k[1]
            })
        ) {
            query += "&type="
        }

        for (const type in this.state.types) {
            if (this.state.types[type as searchTypes]) {
                query += type
            }
        }

        return query
    }
}
