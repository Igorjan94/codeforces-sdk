import { CodeforcesObject, CODEFORCES_URL } from './common';
import { Contest } from './contest';
import { Party } from './party';
import { Problem } from './problem';
export var SubmissionVerdict;
(function (SubmissionVerdict) {
    SubmissionVerdict["FAILED"] = "FAILED";
    SubmissionVerdict["OK"] = "OK";
    SubmissionVerdict["PARTIAL"] = "PARTIAL";
    SubmissionVerdict["COMPILATION_ERROR"] = "COMPILATION_ERROR";
    SubmissionVerdict["RUNTIME_ERROR"] = "RUNTIME_ERROR";
    SubmissionVerdict["WRONG_ANSWER"] = "WRONG_ANSWER";
    SubmissionVerdict["PRESENTATION_ERROR"] = "PRESENTATION_ERROR";
    SubmissionVerdict["TIME_LIMIT_EXCEEDED"] = "TIME_LIMIT_EXCEEDED";
    SubmissionVerdict["MEMORY_LIMIT_EXCEEDED"] = "MEMORY_LIMIT_EXCEEDED";
    SubmissionVerdict["IDLENESS_LIMIT_EXCEEDED"] = "IDLENESS_LIMIT_EXCEEDED";
    SubmissionVerdict["SECURITY_VIOLATED"] = "SECURITY_VIOLATED";
    SubmissionVerdict["CRASHED"] = "CRASHED";
    SubmissionVerdict["INPUT_PREPARATION_CRASHED"] = "INPUT_PREPARATION_CRASHED";
    SubmissionVerdict["CHALLENGED"] = "CHALLENGED";
    SubmissionVerdict["SKIPPED"] = "SKIPPED";
    SubmissionVerdict["TESTING"] = "TESTING";
    SubmissionVerdict["REJECTED"] = "REJECTED";
})(SubmissionVerdict || (SubmissionVerdict = {}));
export var SubmissionTestset;
(function (SubmissionTestset) {
    SubmissionTestset["SAMPLES"] = "SAMPLES";
    SubmissionTestset["PRETESTS"] = "PRETESTS";
    SubmissionTestset["TESTS"] = "TESTS";
    SubmissionTestset["CHALLENGES"] = "CHALLENGES";
    SubmissionTestset["TESTS1"] = "TESTS1";
    SubmissionTestset["TESTS2"] = "TESTS2";
    SubmissionTestset["TESTS3"] = "TESTS3";
    SubmissionTestset["TESTS4"] = "TESTS4";
    SubmissionTestset["TESTS5"] = "TESTS5";
    SubmissionTestset["TESTS6"] = "TESTS6";
    SubmissionTestset["TESTS7"] = "TESTS7";
    SubmissionTestset["TESTS8"] = "TESTS8";
    SubmissionTestset["TESTS9"] = "TESTS9";
    SubmissionTestset["TESTS10"] = "TESTS10";
})(SubmissionTestset || (SubmissionTestset = {}));
export class Submission extends CodeforcesObject {
    constructor(s) {
        super(s);
        this.problem = new Problem(this.problem);
        this.author = new Party(this.author);
    }
    getLink(text) {
        const contestId = this.contestId ?? 0;
        return `<a href="${CODEFORCES_URL}${Contest.getGymType(contestId)}/${contestId}/submission/${this.id}">${text ?? this.id}</a>`;
    }
}
//# sourceMappingURL=submission.js.map