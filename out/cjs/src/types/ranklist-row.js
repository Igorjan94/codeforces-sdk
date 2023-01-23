"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RanklistRow = void 0;
const common_1 = require("./common");
const party_1 = require("./party");
const problem_result_1 = require("./problem-result");
class RanklistRow extends common_1.CodeforcesObject {
    constructor(r, c) {
        super(r);
        this.contest = c;
        this.party = new party_1.Party(this.party);
        this.problemResults = this.problemResults.map(pr => new problem_result_1.ProblemResult(pr, c));
    }
}
exports.RanklistRow = RanklistRow;
//# sourceMappingURL=ranklist-row.js.map