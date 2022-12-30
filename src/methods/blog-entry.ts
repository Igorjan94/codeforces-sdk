import { BlogEntry, BlogEntryId } from '../types/blog-entry'
import { Comment } from '../types/comment'
import { apiRequest } from '../utils/api-request'


export type CommentsOptions = {
    blogEntryId: BlogEntryId
}

export const comments = async (options: CommentsOptions) => {
    return apiRequest(Comment, true, 'blogEntry.comments', options)
}


export type ViewOptions = {
    blogEntryId: BlogEntryId
}

export const view = async (options: ViewOptions) => {
    return apiRequest(BlogEntry, false, 'blogEntry.view', options)
}


