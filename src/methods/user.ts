import { BlogEntryId, BlogEntryShort } from '../types/blog-entry'
import { Handle } from '../types/common'
import { ContestId } from '../types/contest'
import { RatingChange } from '../types/rating-change'
import { Submission } from '../types/submission'
import { User } from '../types/user'
import { apiRequest } from '../utils/api-request'

export type UserBlogEntriesOptions = {
    handle: string
}

export const blogEntries = async (options: UserBlogEntriesOptions) => {
    return apiRequest<Array<BlogEntryShort>>('user.blogEntries', options)
}


export type UserFriendsOptions = {
    onlyOnline: boolean
}

export const friends = async (options?: UserFriendsOptions) => {
    return apiRequest<Array<Handle>>('user.friends', options, {ensureAuth: true})
}


export type UserInfoOptions = {
    handles: Array<Handle>
}

export const info = async (options: UserInfoOptions) => {
    return apiRequest<Array<User>>('user.info', {handles: options.handles.join(';')})
}


export type UserRatedListOptions = {
    activeOnly?: boolean
    includeRetired?: boolean
    contestId?: ContestId
}

export const ratedList = async (options: UserRatedListOptions = {}) => {
    return apiRequest<Array<User>>('user.ratedList', options)
}


export type UserRatingOptions = {
    handle: Handle
}

export const rating = async (options: UserRatingOptions) => {
    return apiRequest<Array<RatingChange>>('user.rating', options)
}


export type UserStatusOptions = {
    handle: Handle
    from?: number
    count?: number
}

export const status = async (options: UserStatusOptions) => {
    return apiRequest<Array<Submission>>('user.status', options)
}


