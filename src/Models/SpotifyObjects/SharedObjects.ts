export interface ImageObject {
    height: number
    width: number
    url: string
}

export interface PublicUserObject {
    display_name?: string
    href: string
    id: string
    images: ImageObject[]
}