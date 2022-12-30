import { ProblemsetName } from '../types/common'
import { Problem } from '../types/problem'
import { ProblemStatistics } from '../types/problem-statistics'
import { Problemset } from '../types/problemset'
import { Submission } from '../types/submission'
import { apiRequest } from '../utils/api-request'

export type ProblemsOptions = {
    tags?: Array<string> | string
    problemsetName?: ProblemsetName
}

export const problems = async (options: ProblemsOptions = {}) => {
    if ('tags' in options) {
        if (Array.isArray(options.tags))
            options.tags = options.tags.join(';')
        if (options.tags)
            options.tags = options.tags.toLowerCase()
    }
    return apiRequest(Problemset, false, 'problemset.problems', options)
}


export type RecentStatusOptions = {
    count: number
    problemsetName?: ProblemsetName
}

export const recentStatus = async (options: RecentStatusOptions) => {
    return apiRequest(Submission, true, 'problemset.recentStatus', options)
}


