import { CodeforcesObject, CODEFORCES_URL } from './common';
export var ProblemType;
(function (ProblemType) {
    ProblemType["PROGRAMMING"] = "PROGRAMMING";
    ProblemType["QUESTION"] = "QUESTION";
})(ProblemType || (ProblemType = {}));
export class Problem extends CodeforcesObject {
    getLink(text) {
        return `<a href='${CODEFORCES_URL}problemset/problem/${this.contestId}/${this.index}'>${text ?? this.name}</a>`;
    }
}
//# sourceMappingURL=problem.js.map