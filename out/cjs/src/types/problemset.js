"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Problemset = void 0;
const common_1 = require("./common");
const problem_1 = require("./problem");
const problem_statistics_1 = require("./problem-statistics");
class Problemset extends common_1.CodeforcesObject {
    constructor(p) {
        super(p);
        this.problems = this.problems.map(problem => new problem_1.Problem(problem));
        this.problemStatistics = this.problemStatistics.map(ps => new problem_statistics_1.ProblemStatistics(ps));
    }
}
exports.Problemset = Problemset;
//# sourceMappingURL=problemset.js.map