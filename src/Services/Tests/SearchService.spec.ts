import { createQuery, getType } from "../SearchService"
import SearchEndpoints from "../../Endpoints/Search"
import { ArtistObject } from "../../Models/SpotifyObjects/ArtistObjects"
import { ResponseObjects } from "../../Models/Custom"


describe("Search Service", () => {
    describe("Build Query", () => {
        const searchVal = "nice"
        const searchTypes = ["artist", "track"]

        const testQuery = "q=nice&type=artist,track"
        const actualQuery = createQuery(searchVal, searchTypes)

        it("Queries should match", () => {
            expect(testQuery).toEqual(actualQuery)
        })
    })

    jest.mock("../../Endpoints/Search")

    describe("Get Search Items", () => {
        const searchVal = "Post"
        const searchTypes = ["artist"]
        const query = createQuery(searchVal, searchTypes)
        
        it("Expect to get back array of artists", async () => {
            const testArtist : ArtistObject = {
                genres: ["rubberDuckyQuacks", "fryingPanDrums"],
                href: "farmersOnly.com",
                id: "69",
                images: [],
                name: "Mohammed",
                popularity: 9999999999,
                uri: "www.coolsville.com"
            }

            const mockSearchResponse: Array<ResponseObjects> = [testArtist]
            const searchPromise = new Promise<Array<ResponseObjects>>((resolve, reject) => {
                resolve(mockSearchResponse)
            })

            SearchEndpoints.GetSearchResults = jest.fn(_ => searchPromise)

            SearchEndpoints.GetSearchResults(query).then((items) => {
                const type = "Artist"

                expect(getType(items[0])).toEqual(type)
                expect(items).toBeInstanceOf(Array)
            })
        })
    })
})