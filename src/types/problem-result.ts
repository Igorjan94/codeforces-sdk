import { CodeforcesObject, Float } from './common'

export enum ProblemResultType {
    PRELIMINARY = 'PRELIMINARY', 
    FINAL = 'FINAL'
}

export class ProblemResult extends CodeforcesObject<ProblemResult> {
    points: Float
    penalty?: number
    rejectedAttemptCount: number
    type: ProblemResultType
    bestSubmissionTimeSeconds?: number
}

