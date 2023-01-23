import { CodeforcesObject } from './common';
import { ContestType } from './contest';
let clc;
try {
    clc = require('cli-color');
}
catch (e) { }
export var ProblemResultType;
(function (ProblemResultType) {
    ProblemResultType["PRELIMINARY"] = "PRELIMINARY";
    ProblemResultType["FINAL"] = "FINAL";
})(ProblemResultType || (ProblemResultType = {}));
const SECONDS_IN_DAY = 24 * 60 * 60;
export class ProblemResult extends CodeforcesObject {
    constructor(pr, c) {
        super(pr);
        this.contest = c;
    }
    getRelativeTime() {
        const time = this.bestSubmissionTimeSeconds;
        if (!time)
            return '';
        const date = new Date(time * 1000).toISOString().substr(11, 5);
        if (this.contest.durationSeconds < SECONDS_IN_DAY)
            return date;
        const days = Math.floor(time / SECONDS_IN_DAY);
        if (days)
            return `${days}:${date}`;
        else
            return date;
    }
    wrapResult(withColor, color, res) {
        if (clc && withColor)
            return clc[color](res);
        return res;
    }
    getResult(withColor = false) {
        if (!this.bestSubmissionTimeSeconds)
            return this.wrapResult(withColor, 'red', this.rejectedAttemptCount == 0 ? '' : `-${this.rejectedAttemptCount}`);
        const okColor = this.type == ProblemResultType.FINAL ? 'green' : 'blue';
        if (this.contest.type == ContestType.ICPC)
            return this.wrapResult(withColor, okColor, this.rejectedAttemptCount == 0 ? '+' : `+${this.rejectedAttemptCount}`);
        return this.wrapResult(withColor, okColor, this.points.toFixed(0));
    }
    toString(options) {
        const result = this.getResult(options?.withColor);
        if (options?.withTime)
            return `${result}\n${this.getRelativeTime()}`;
        return result;
    }
}
//# sourceMappingURL=problem-result.js.map