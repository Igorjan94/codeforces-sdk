import { Handle } from './common'

export type User = {
    handle: Handle
    email?: string
    vkId?: string
    openId?: string
    firstName?: string
    lastName?: string
    country?: string
    city?: string
    organization?: string
    contribution: number
    rank: string
    rating: number
    maxRank: string
    maxRating: number
    lastOnlineTimeSeconds: number
    registrationTimeSeconds: number
    friendOfCount: number
    avatar: string
    titlePhoto: string
}
