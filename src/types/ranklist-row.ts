import { CodeforcesObject, Float } from './common'
import { Party } from './party'
import { ProblemResult } from './problem-result'

export class RanklistRow extends CodeforcesObject<RanklistRow> {
    party: Party
    rank: number
    points: Float
    penalty: number
    successfulHackCount: number
    unsuccessfulHackCount: number
    problemResults: Array<ProblemResult>
    /** For IOI contests only */
    lastSubmissionTimeSeconds?: number

    constructor(r: RanklistRow) {
        super(r)
        this.party = new Party(this.party)
        this.problemResults = this.problemResults.map(pr => new ProblemResult(pr))
    }
}

