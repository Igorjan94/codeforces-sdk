import { ProblemIndex } from './common'
import { ContestId } from './contest'

export type ProblemStatistics = {
    contestId?: ContestId
    index: ProblemIndex
    solvedCount: number
}

