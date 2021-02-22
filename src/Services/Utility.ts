/**
 * Convert a length of time in ms to a sentence
 * Ex: 1 Day, 3 Hours, 12 Minutes
 */ 
export function msToSentence(ms: number) {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    const label: string[] = []
    if (days > 0) {
        label.push(`${days} Days`)
    }

    if (hours > 0) {
        label.push(`${hours % 24} Hours`)
    }

    if (minutes > 0) {
        label.push(`${minutes % 60} Minutes`)
    }

    if (label.length == 0) {
        label.push(`${seconds} Seconds`)
    }

    return label.join(", ")
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