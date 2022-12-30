import { CodeforcesObject, ProblemIndex } from './common'
import { ContestId } from './contest'

export class ProblemStatistics extends CodeforcesObject<ProblemStatistics> {
    contestId?: ContestId
    index: ProblemIndex
    solvedCount: number
}

