import { BlogEntryShort } from './blog-entry'
import { Comment } from './comment'

export type RecentAction = {
    timeSeconds: number
    blogEntry?: BlogEntryShort
    comment?: Comment
}

