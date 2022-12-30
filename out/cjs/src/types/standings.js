"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Standings = void 0;
const common_1 = require("./common");
const contest_1 = require("./contest");
const problem_1 = require("./problem");
const ranklist_row_1 = require("./ranklist-row");
class Standings extends common_1.CodeforcesObject {
    constructor(s) {
        super(s);
        this.contest = new contest_1.Contest(this.contest);
        this.problems = this.problems.map(problem => new problem_1.Problem(problem));
        this.rows = this.rows.map(row => new ranklist_row_1.RanklistRow(row));
    }
    getLink(text) {
        return `<a href='${common_1.CODEFORCES_URL}${contest_1.Contest.getGymType(this.contest.id)}/${this.contest.id}/standings'>${text ?? this.contest.name}</a>`;
    }
}
exports.Standings = Standings;
//# sourceMappingURL=standings.js.map