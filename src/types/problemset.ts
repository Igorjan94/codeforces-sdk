import { CodeforcesObject } from './common'
import { Problem } from './problem'
import { ProblemStatistics } from './problem-statistics'

export class Problemset extends CodeforcesObject<Problemset> {
    problems: Array<Problem>
    problemStatistics: Array<ProblemStatistics>

    constructor(p: Problemset) {
        super(p)
        this.problems = this.problems.map(problem => new Problem(problem))
        this.problemStatistics = this.problemStatistics.map(ps => new ProblemStatistics(ps))
    }
}
