import { CodeforcesObject, CODEFORCES_URL } from './common'
import { Contest } from './contest'
import { Problem } from './problem'
import { RanklistRow } from './ranklist-row'

export class Standings extends CodeforcesObject<Standings> {
    contest: Contest
    problems: Array<Problem>
    rows: Array<RanklistRow>

    constructor(s: Standings) {
        super(s)
        this.contest = new Contest(this.contest)
        this.problems = this.problems.map(problem => new Problem(problem))
        this.rows = this.rows.map(row => new RanklistRow(row))
    }

    getLink(text?: string) {
        return `<a href='${CODEFORCES_URL}${Contest.getGymType(this.contest.id)}/${this.contest.id}/standings'>${text ?? this.contest.name}</a>`
    }
}
