export function createQuery(searchVal: string, types: string[]): string {
    let query = `q=${searchVal}`

    if (types.length > 0) {
        const typeQuery = "&type=" + types.join(",")
        query += typeQuery
    }

    return query
}