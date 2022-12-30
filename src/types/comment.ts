import { BlogEntryId } from './blog-entry'
import { AvailableLanguages, CodeforcesObject, CODEFORCES_URL, Handle } from './common'

export type CommentId = number & { __unique: 'CommentId' }

export class Comment extends CodeforcesObject<Comment> {
    id: CommentId
    creationTimeSeconds: number
    commentatorHandle: Handle
    locale: AvailableLanguages
    text: string
    parentCommentId?: CommentId
    rating: number

    getLink(blogEntryId: BlogEntryId, text?: string) {
        return `<a href='${CODEFORCES_URL}blog/entry/${blogEntryId}#comment-${this.id}'>${text ?? this.id}</a>`
    }
}
