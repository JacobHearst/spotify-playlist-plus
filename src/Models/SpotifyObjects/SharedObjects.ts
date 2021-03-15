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

export interface DeviceObject {
    id: string,
    is_active: boolean,
    is_restricted: boolean,
    name: string,
    type: string,
    volume_percent: number
}

// default context object that spotify uses in some responses
export interface ContextObject {
    external_uris: any,
    href: string,
    type: string,
    uri: string
}