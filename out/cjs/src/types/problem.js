"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Problem = exports.ProblemType = void 0;
const common_1 = require("./common");
var ProblemType;
(function (ProblemType) {
    ProblemType["PROGRAMMING"] = "PROGRAMMING";
    ProblemType["QUESTION"] = "QUESTION";
})(ProblemType = exports.ProblemType || (exports.ProblemType = {}));
class Problem extends common_1.CodeforcesObject {
    getLink(text) {
        return `<a href='${common_1.CODEFORCES_URL}problemset/problem/${this.contestId}/${this.index}'>${text ?? this.name}</a>`;
    }
}
exports.Problem = Problem;
//# sourceMappingURL=problem.js.map