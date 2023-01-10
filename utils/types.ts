export type ImageQuality = ExclusifyUnion<Thumbnail | Small | Medium | Large | Original>

type Thumbnail = {
    thumbnail: boolean
}

type Small = {
    small: boolean
}

type Medium = {
    medium: boolean
}

type Large = {
    large: boolean
}

type Original = {
    original: boolean
}

type AllKeys<T> = T extends unknown ? keyof T : never
type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
type _ExclusifyUnion<T, K extends PropertyKey> = T extends unknown
    ? Id<T & Partial<Record<Exclude<K, keyof T>, never>>>
    : never
type ExclusifyUnion<T> = _ExclusifyUnion<T, AllKeys<T>>
