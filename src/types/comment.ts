import { AvailableLanguages, Handle } from './common'

export type CommentId = number & { __unique: 'CommentId' }

export type Comment = {
    id: CommentId
    creationTimeSeconds: number
    commentatorHandle: Handle
    locale: AvailableLanguages
    text: string
    parentCommentId?: CommentId
    rating: number
}
