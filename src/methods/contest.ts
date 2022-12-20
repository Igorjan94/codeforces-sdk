import { Contest, ContestId } from '../types/contest'
import { Hack } from '../types/hack'
import { Problem } from '../types/problem'
import { RanklistRow } from '../types/ranklist-row'
import { RatingChange } from '../types/rating-change'
import { Submission } from '../types/submission'
import { apiRequest } from '../utils/api-request'

export type ContestHacksOptions = {
    contestId: ContestId
}

export const hacks = async (options: ContestHacksOptions) => {
    return apiRequest<Array<Hack>>('contest.hacks', options)
}


export type ContestListOptions = {
    gym?: boolean
}

export const list = async (options: ContestListOptions = {}) => {
    return apiRequest<Array<Contest>>('contest.list', options)
}


export type ContestRatingChangesOptions = {
    contestId: ContestId
}

export const ratingChanges = async (options: ContestRatingChangesOptions) => {
    return apiRequest<Array<RatingChange>>('contest.ratingChanges', options)
}


export type ContestStandingsOptions = {
    contestId: ContestId
    from: number
    count?: number
    handles?: string | Array<string>
    room?: number
    showUnofficial?: boolean
}

export const standings = async (options: ContestStandingsOptions) => {
    if (Array.isArray(options.handles)) {
        options.handles = options.handles.join(';')
    }
    return apiRequest<{
        contest: Contest,
        problems: Array<Problem>,
        rows: Array<RanklistRow>,
    }>('contest.standings', options)
}


export type ContestStatusOptions = {
    contestId: ContestId
    handle?: string
    from?: number
    count?: number
}

export const status = async (options: ContestStatusOptions) => {
    return apiRequest<Array<Submission>>('contest.status', options)
}
