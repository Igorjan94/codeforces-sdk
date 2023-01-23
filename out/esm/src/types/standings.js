import { CodeforcesObject, CODEFORCES_URL } from './common';
import { Contest } from './contest';
import { Problem } from './problem';
import { RanklistRow } from './ranklist-row';
export class Standings extends CodeforcesObject {
    constructor(s) {
        super(s);
        this.contest = new Contest(this.contest);
        this.problems = this.problems.map(problem => new Problem(problem));
        this.rows = this.rows.map(row => new RanklistRow(row, this.contest));
    }
    getLink(text) {
        return `<a href="${CODEFORCES_URL}${Contest.getGymType(this.contest.id)}/${this.contest.id}/standings">${text ?? this.contest.name}</a>`;
    }
}
//# sourceMappingURL=standings.js.map