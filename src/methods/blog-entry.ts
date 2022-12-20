import { BlogEntry, BlogEntryId } from '../types/blog-entry'
import { Comment } from '../types/comment'
import { apiRequest } from '../utils/api-request'


export type BlogEntryCommentsOptions = {
    blogEntryId: BlogEntryId
}

export const comments = async (options: BlogEntryCommentsOptions) => {
    return apiRequest<Array<Comment>>('blogEntry.comments', options)
}


export type BlogEntryViewOptions = {
    blogEntryId: BlogEntryId
}

export const view = async (options: BlogEntryViewOptions) => {
    return apiRequest<BlogEntry>('blogEntry.view', options)
}


