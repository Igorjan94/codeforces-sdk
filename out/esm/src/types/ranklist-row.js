import { CodeforcesObject } from './common';
import { Party } from './party';
import { ProblemResult } from './problem-result';
export class RanklistRow extends CodeforcesObject {
    constructor(r) {
        super(r);
        this.party = new Party(this.party);
        this.problemResults = this.problemResults.map(pr => new ProblemResult(pr));
    }
}
//# sourceMappingURL=ranklist-row.js.map