import { Float } from './common'

export enum ProblemResultType {
    PRELIMINARY = 'PRELIMINARY', 
    FINAL = 'FINAL'
}

export type ProblemResult = {
    points: Float
    penalty?: number
    rejectedAttemptCount: number
    type: ProblemResultType
    bestSubmissionTimeSeconds?: number
}

