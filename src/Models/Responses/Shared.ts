export interface Paginated<T> {
    items: T[]
    limit: number
    offset: number
    total: number
}