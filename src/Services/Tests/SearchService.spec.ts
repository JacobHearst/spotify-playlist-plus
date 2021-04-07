import { createQuery } from "../SearchService"
import { GetSearchResults } from "../../Endpoints/Search"
import { ArtistObject } from "../../Models/SpotifyObjects/ArtistObjects"

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

    describe("Get Search Items", () => {
        const searchVal = "Post"
        const searchTypes = ["artist"]
        const query = createQuery(searchVal, searchTypes)
        console.log(query)
        it("Expect to get back array of artists", async () => {
            const items = await GetSearchResults(query)

            const testArtist : ArtistObject = {
                genres: ["rubberDuckyQuacks", "fryingPanDrums"],
                href: "farmersOnly.com",
                id: "69",
                images: [],
                name: "Mohammed",
                popularity: 9999999999,
                uri: "www.coolsville.com"
            }
            expect(items[0]).toHaveProperty(Object.keys(testArtist))
        })
    })
})