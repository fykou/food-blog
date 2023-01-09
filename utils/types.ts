export type ImageQuality = ExclusifyUnion<Thumbnail | Small | Medium | Large | Original>

export type Thumbnail = {
	thumbnail: boolean
}

export type Small = {
	small: boolean
}

export type Medium = {
	medium: boolean
}

export type Large = {
	large: boolean
}

export type Original = {
	original: boolean
}

type AllKeys<T> = T extends unknown ? keyof T : never
type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
type _ExclusifyUnion<T, K extends PropertyKey> = T extends unknown
	? Id<T & Partial<Record<Exclude<K, keyof T>, never>>>
	: never
type ExclusifyUnion<T> = _ExclusifyUnion<T, AllKeys<T>>
