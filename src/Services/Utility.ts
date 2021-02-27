/**
 * Convert a length of time in ms to a sentence
 * Ex: 1 Day, 3 Hours, 12 Minutes
 */
export function msToSentence(ms: number) {
    const msInDay = 86400000
    const msInHour = msInDay / 24
    const msInMinute = msInHour / 60

    const labelParts: string[] = []
    const pluralize = (count: number) => count > 1 ? "s" : ""
    const days = Math.floor(ms / msInDay)
    if (days > 0) {
        labelParts.push(`${days} Day${pluralize(days)}`)
    }

    let remainder = ms % msInDay
    const hours = Math.floor(remainder / msInHour)
    if (hours > 0) {
        labelParts.push(`${hours % 24} Hour${pluralize(hours)}`)
    }
    
    remainder = remainder % msInHour
    const minutes = Math.floor(remainder / msInMinute)
    if (minutes > 0) {
        labelParts.push(`${minutes % 60} Minute${pluralize(minutes)}`)
    }

    remainder = remainder % msInMinute
    const seconds = Math.floor(remainder / 1000)
    if (labelParts.length == 0 && seconds > 0) {
        labelParts.push(`${seconds} Second${pluralize(seconds)}`)
    }

    return labelParts.join(", ")
}

export function msToTimestamp(ms: number) {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    const labelValues: number[] = []
    if (hours > 0) {
        labelValues.push(hours)
    }

    if (minutes > 0) {
        labelValues.push(minutes % 60)
    }

    if (seconds > 0) {
        labelValues.push(seconds % 60)
    }

    return labelValues.map((value, index) => {
        if (value % 10 == 0) {
            return `${value}0`
        }

        if (index == 0) {
            return `${value}`
        }

        if (value < 10) {
            return `0${value}`
        }

        return `${value}`
    }).join(":")
}