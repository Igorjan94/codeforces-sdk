
export type BlogEntryId = number & { __unique: 'BlogEntryId' }
import { AvailableLanguages, CodeforcesObject, CODEFORCES_URL, Handle } from './common'

export class BlogEntryShort extends CodeforcesObject<BlogEntryShort> {
    id: BlogEntryId
    originalLocale: AvailableLanguages
    creationTimeSeconds: number
    authorHandle: Handle
    title: string
    locale: AvailableLanguages
    modificationTimeSeconds: number
    allowViewHistory: boolean
    tags: Array<string>
    rating: number

    toString() {
        return `${this.title}`
    }

    getLink(text?: string) {
        return `<a href="${CODEFORCES_URL}blog/entry/${this.id}">${text ?? this.title}</a>`
    }
}

export class BlogEntry extends BlogEntryShort {
    content: string
}

