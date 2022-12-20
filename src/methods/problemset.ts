    import { ProblemsetName } from '../types/common'
import { Problem } from '../types/problem'
import { ProblemStatistics } from '../types/problem-statistics'
import { Submission } from '../types/submission'
import { apiRequest } from '../utils/api-request'

export type ProblemsetProblemsOptions = {
    tags?: Array<string> | string
    problemsetName?: ProblemsetName
}

export const problems = async (options: ProblemsetProblemsOptions = {}) => {
    if ('tags' in options) {
        if (Array.isArray(options.tags))
            options.tags = options.tags.join(';')
        if (options.tags)
            options.tags = options.tags.toLowerCase()
    }
    return apiRequest<{
        problems: Array<Problem>,
        problemStatistics: Array<ProblemStatistics>
    }>('problemset.problems', options)
}


export type ProblemsetRecentStatusOptions = {
    count: number
    problemsetName?: ProblemsetName
}

export const recentStatus = async (options: ProblemsetRecentStatusOptions) => {
    return apiRequest<Array<Submission>>('problemset.recentStatus', options)
}


