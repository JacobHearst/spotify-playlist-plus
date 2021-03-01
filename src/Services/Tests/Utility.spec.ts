import { msToSentence, msToTimestamp } from "../Utility"

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

        it("should return undefined when ms is 0", () => {
            expect(msToSentence(0)).toBeUndefined()
        })

        it("should return undefined when ms is less than 0", () => {
            expect(msToSentence(-1)).toBeUndefined()
        })

        it("should only include a Days label when ms is at least 24 hours long", () => {
            const mockTimes = [23, 24, 25].map(hours => hours * msInHour)
            const expectedSentences = ["23 Hours", "1 Day", "1 Day, 1 Hour"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should only include an Hours label when ms is at least 60 minutes long", () => {
            const mockTimes = [59, 60, 61].map(minutes => minutes * msInMinute)
            const expectedSentences = ["59 Minutes", "1 Hour", "1 Hour, 1 Minute"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should only include a Minutes label when ms is at least 1 minute long and shouldn't include seconds", () => {
            const mockTimes = [59, 60, 61].map(seconds => seconds * msInSecond)
            const expectedSentences = ["59 Seconds", "1 Minute", "1 Minute"]
            batchTestMsToSentence(mockTimes, expectedSentences)
        })

        it("should only include a Seconds label when ms is at most 1 minute long", () => {
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

    describe("msToTimestamp", () => {
        function batchTestMsToTimestamp(mockTimes: number[], expectedTimestamps: string[]) {
            mockTimes.forEach((time, index) => {
                const actual = msToTimestamp(time)
                expect(actual).toBe(expectedTimestamps[index])
            })
        }

        it("should only include hours when ms is at least 60 minutes long", () => {
            const mockTimes = [59, 60, 61].map(minutes => minutes * msInMinute)
            const expectedTimestamps = ["59:00", "1:00:00", "1:01:00"]
            batchTestMsToTimestamp(mockTimes, expectedTimestamps)
        })

        it("should only include minutes when ms is at least 1 minute long", () => {
            const mockTimes = [59, 60, 61].map(seconds => seconds * msInSecond)
            const expectedTimestamps = ["0:59", "1:00", "1:01"]
            batchTestMsToTimestamp(mockTimes, expectedTimestamps)
        })

        it("should only include seconds when ms is at most 1 minute long", () => {
            const mockTimes = [59, 60].map(seconds => seconds * msInSecond)
            const expectedTimestamps = ["0:59", "1:00"]
            batchTestMsToTimestamp(mockTimes, expectedTimestamps)
        })

        it("should ensure values less than 10 are prefixed with a 0", () => {
            // Each label value is processed the same way so we only need to test seconds here
            const mockTimes = [9, 10].map(seconds => seconds * msInSecond)
            const expectedTimestamps = ["0:09", "0:10"]
            batchTestMsToTimestamp(mockTimes, expectedTimestamps)
        })

        it("should return undefined when a value of 0 is passed in", () => {
            expect(msToTimestamp(0)).toBeUndefined()
        })

        it("should return undefined when a negative value is passed in", () => {
            expect(msToTimestamp(-1)).toBeUndefined()
        })
    })
})