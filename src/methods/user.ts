import { BlogEntryId, BlogEntryShort } from '../types/blog-entry'
import { Handle } from '../types/common'
import { ContestId } from '../types/contest'
import { RatingChange } from '../types/rating-change'
import { Submission } from '../types/submission'
import { User } from '../types/user'
import { apiRequest, rawApiRequest } from '../utils/api-request'

export type BlogEntriesOptions = {
    handle: Handle
}

export const blogEntries = async (options: BlogEntriesOptions) => {
    return apiRequest(BlogEntryShort, true, 'user.blogEntries', options)
}


export type FriendsOptions = {
    onlyOnline: boolean
}

export const friends = async (options?: FriendsOptions) => {
    return rawApiRequest<Array<Handle>>('user.friends', options, {ensureAuth: true})
}


export type InfoOptions = {
    handles: Array<Handle>
}

export const info = async (options: InfoOptions) => {
    return apiRequest(User, true, 'user.info', {handles: options.handles.join(';')})
}


export type RatedListOptions = {
    activeOnly?: boolean
    includeRetired?: boolean
    contestId?: ContestId
}

export const ratedList = async (options: RatedListOptions = {}) => {
    return apiRequest(User, true, 'user.ratedList', options)
}


export type RatingOptions = {
    handle: Handle
}

export const rating = async (options: RatingOptions) => {
    return apiRequest(RatingChange, true, 'user.rating', options)
}


export type StatusOptions = {
    handle: Handle
    from?: number
    count?: number
}

export const status = async (options: StatusOptions) => {
    return apiRequest(Submission, true, 'user.status', options)
}


