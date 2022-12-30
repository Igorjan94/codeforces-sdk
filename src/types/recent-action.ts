import { BlogEntryShort } from './blog-entry'
import { Comment } from './comment'
import { CodeforcesObject } from './common'

export class RecentAction extends CodeforcesObject<RecentAction> {
    timeSeconds: number
    blogEntry?: BlogEntryShort
    comment?: Comment

    constructor(r: RecentAction) {
        super(r)
        if (this.comment)
            this.comment = new Comment(this.comment)
        if (this.blogEntry)
            this.blogEntry = new BlogEntryShort(this.blogEntry)
    }
}

