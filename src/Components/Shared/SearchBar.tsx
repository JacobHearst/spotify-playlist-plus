import React from "react"
import { InputGroup, Dropdown, FormControl, Form, Modal, Button } from "react-bootstrap"
import DropdownButton from "react-bootstrap/DropdownButton"
import SearchEndpoints from "../../Endpoints/Search"
import { ResponseObjects, SearchTypes } from "../../Models/Custom"
import { createQuery, getType } from "../../Services/SearchService"
import { Link } from "react-router-dom"

interface SearchBarProps {
    artist?: boolean
    playlist?: boolean
    track?: boolean
    album?: boolean
}

interface SearchBarState {
    items?: ResponseObjects[]
    searchVal: string
    showModal: boolean
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
            showModal: false,
            types: {
                artist: props.artist ?? false,
                playlist: props.playlist ?? false,
                track: props.track ?? false,
                album: props.album ?? false,
            },
        }

        this.search = this.search.bind(this)
    }

    search(e: React.KeyboardEvent): void {
        if (e.key !== "Enter") {
            return
        }

        const typesToSearch = Object.keys(this.state.types).filter((t) => this.state.types[t as SearchTypes])
        const searchVal = (e.target as HTMLInputElement).defaultValue

        SearchEndpoints.GetSearchResults(createQuery(searchVal, typesToSearch)).then((searchResponseItems) => {
            this.setState({
                ...this.state,
                items: searchResponseItems,
                showModal: true,
            })
        })
    }

    render() {
        const pageURL = "/spotify-playlist-plus"

        const searchItems = this.state.items?.map((item, i) => {
            const type = getType(item)

            return (
                <li key={i}>
                    <Link className="p-2" to={`${pageURL}/${type}/${item.id}`}>
                        <Button
                            className="searchResultButton"
                            onClick={() => {
                                this.setState({ ...this.state, showModal: false, searchVal: "" })
                            }}>
                            {`${type}: ${item.name}`}
                        </Button>
                    </Link>
                </li>
            )
        })

        return (
            <div>
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
                <Modal
                    show={this.state.showModal}
                    onHide={() => {
                        this.setState({ ...this.state, showModal: false })
                    }}>
                    <Modal.Header>
                        <Modal.Title>Search Results</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>{searchItems}</ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                this.setState({ ...this.state, showModal: false })
                            }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
