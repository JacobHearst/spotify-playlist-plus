/* global global */

import AuthService from "../AuthService"

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
            const cookie = AuthService.createCodeVerifierCookie()
            expect(AuthService.getVerifierCookie()).toEqual(cookie)
            done()
        })
    })
})