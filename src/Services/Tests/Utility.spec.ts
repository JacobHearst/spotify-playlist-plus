import { PlaylistObject } from "../../Models/SpotifyObjects/PlaylistObjects"
import { PublicUserObject } from "../../Models/SpotifyObjects/SharedObjects"
import { msToSentence } from "../Utility"

describe("Utility", () => {
    const msInDay = 86400000
    const msInHour = msInDay / 24
    const msInMinute = msInHour / 60
    const msInSecond = msInMinute / 60

    describe("msToSentence", () => {
        function batchTestMsToSentence(mockTimes: number[], expectedSentences: string[]) {
            mockTimes.forEach((time, index) => {
                const actual = msToSentence(time)
                expect(actual).toBe(expectedSentences[index])
            })
        }

        it("should return an empty string when the time is 0", () => {
            expect(msToSentence(0)).toBe("")
        })

        it("should only include a Days label when the playlist is at least 24 hours long", () => {
            const mockTimes = [23, 24, 25].map(hours => hours * msInHour)
            const expectedSentences = ["23 Hours", "1 Day", "1 Day, 1 Hour"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should only include an Hours label when the playlist is at least 60 minutes long", () => {
            const mockTimes = [59, 60, 61].map(minutes => minutes * msInMinute)
            const expectedSentences = ["59 Minutes", "1 Hour", "1 Hour, 1 Minute"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should only include an Minutes label when the playlist is at least 1 minute long and shouldn't include seconds", () => {
            const mockTimes = [59, 60, 61].map(seconds => seconds * msInSecond)
            const expectedSentences = ["59 Seconds", "1 Minute", "1 Minute"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should only include an Seconds label when the playlist is at most 1 minute long", () => {
            const mockTimes = [59, 60].map(seconds => seconds * msInSecond)
            const expectedSentences = ["59 Seconds", "1 Minute"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should pluralize correctly", () => {
            const unitMultiplierMap: { [key: string]: number } = {
                "Day": msInDay,
                "Hour": msInHour,
                "Minute": msInMinute,
                "Second": msInSecond
            }

            Object.entries(unitMultiplierMap).forEach(([unit, multiplier]) => {
                const mockTimes = [1 * multiplier, 2 * multiplier]
                const expectedSentences = [`1 ${unit}`, `2 ${unit}s`]
                batchTestMsToSentence(mockTimes, expectedSentences)
            })
        })
    })
})