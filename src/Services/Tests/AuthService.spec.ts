/* global global */

import { GetVerifierCookie } from "../../App"
import * as Retriever from "../AuthService"

const crypto = require("crypto")

describe("Token Retrieval", () => {
    describe("Cookie Test", () => {

        // need to set up crypto property in order to test
        Object.defineProperty(global, "crypto", {
            value: {
                getRandomValues: (arr: any) => crypto.randomBytes(arr.length)
            }
        })

        it("Cookie is created, set, and retrieved", (done) => {
            const cookie = Retriever.createCodeVerifierCookie()
            expect(cookie).toEqual(GetVerifierCookie())
            done()
        })
    })
})