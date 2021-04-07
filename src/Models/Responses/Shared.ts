export interface Paginated<T> {
    href: string
    items: T[]
    limit: number
    next?: string
    offset: number
    previous?: string
    total: number
}

export interface CursorPaginated<T> {
    cursors: CursorObject
    href: string
    items: T[]
    limit: number
    next: string
    total: number
}

export interface CursorObject {
    after: string   
}