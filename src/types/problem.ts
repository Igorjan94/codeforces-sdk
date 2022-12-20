import { Float, ProblemIndex, ProblemsetName } from './common'
import { ContestId } from './contest'

export enum ProblemType {
    PROGRAMMING = 'PROGRAMMING',
    QUESTION = 'QUESTION',
}

export type Problem = {
    contestId: ContestId
    problemsetName?: ProblemsetName
    index: ProblemIndex
    name: string
    type: ProblemType
    points?: Float
    rating?: number
    tags: Array<string>
}

