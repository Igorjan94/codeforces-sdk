
export type BlogEntryId = number & { __unique: 'BlogEntryId' }
import { AvailableLanguages, Handle } from './common'

export type BlogEntry = {
    id: BlogEntryId
    originalLocale: AvailableLanguages
    creationTimeSeconds: number
    authorHandle: Handle
    title: string
    content: string
    locale: AvailableLanguages
    modificationTimeSeconds: number
    allowViewHistory: boolean
    tags: Array<string>
    rating: number
}

export type BlogEntryShort = Omit<BlogEntry, 'content'>

