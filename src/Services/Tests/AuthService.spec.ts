/* global global */

import { AuthToken } from "../../Models/Authentication"
import AuthService from "../AuthService"
jest.mock("../AuthService.ts")

const crypto = require("crypto")

describe("Token Retrieval", () => {
    describe("Cookie Test", () => {

        // need to set up crypto property in order to test
        Object.defineProperty(global, "crypto", {
            value: {
                getRandomValues: (arr: any) => crypto.randomBytes(arr.length)
            }
        })

        it("Cookie is created, set, and retrieved", () => {
            const cookie = AuthService.createCodeVerifierCookie()
            expect(AuthService.getVerifierCookie()).toEqual(cookie)
        })
    })
})

describe("Timer Test", () => {
    jest.mock("../AuthService.ts")
    jest.useFakeTimers()

    const callbackMock = jest.fn((token) => { AuthService.refreshTimer(token, callbackMock) })

    const testToken : AuthToken = {
        access_token: "damn",
        token_type: "test",
        expires_in: 10000,
        refresh_token: "lit"
    }

    describe("Called once", () => {
        callbackMock(testToken)

        jest.runOnlyPendingTimers()
    
        expect(callbackMock).toHaveBeenCalledTimes(1)
        expect(AuthService.refreshTimer).toHaveBeenCalledTimes(1)
        expect(AuthService.refreshTimer).toHaveBeenCalledWith(testToken, callbackMock)
    })
})