// objects used in react router dom. Mainly just here so typescript is happy

export interface RouteProps {
    match: MatchObject,
    location: LocationObject,
    history: HistoryObject
}

interface MatchObject {

}

interface LocationObject {
    search: string
}

interface HistoryObject {

}

