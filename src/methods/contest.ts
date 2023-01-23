import { Handle } from '../types/common'
import { Contest, ContestId } from '../types/contest'
import { Hack } from '../types/hack'
import { Problem } from '../types/problem'
import { RanklistRow } from '../types/ranklist-row'
import { RatingChange } from '../types/rating-change'
import { Standings } from '../types/standings'
import { Submission } from '../types/submission'
import { apiRequest } from '../utils/api-request'

export type HacksOptions = {
    contestId: ContestId
}

export const hacks = async (options: HacksOptions) => {
    return apiRequest(Hack, true, 'contest.hacks', options)
}


export type ListOptions = {
    gym?: boolean
}

export const list = async (options: ListOptions = {}) => {
    return apiRequest(Contest, true, 'contest.list', options)
}


export type RatingChangesOptions = {
    contestId: ContestId
}

export const ratingChanges = async (options: RatingChangesOptions) => {
    return apiRequest(RatingChange, true, 'contest.ratingChanges', options)
}


export type StandingsOptions = {
    contestId: ContestId
    from: number
    count?: number
    handles?: Handle | Array<Handle>
    room?: number
    showUnofficial?: boolean
}

export const standings = async (options: StandingsOptions) => {
    if (Array.isArray(options.handles)) {
        options.handles = options.handles.join(';') as Handle
    }
    return apiRequest(Standings, false, 'contest.standings', options)
}


export type StatusOptions = {
    contestId: ContestId
    handle?: Handle
    from?: number
    count?: number
}

export const status = async (options: StatusOptions) => {
    return apiRequest(Submission, true, 'contest.status', options)
}
