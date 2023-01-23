"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submission = exports.SubmissionTestset = exports.SubmissionVerdict = void 0;
const common_1 = require("./common");
const contest_1 = require("./contest");
const party_1 = require("./party");
const problem_1 = require("./problem");
var SubmissionVerdict;
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
})(SubmissionVerdict = exports.SubmissionVerdict || (exports.SubmissionVerdict = {}));
var SubmissionTestset;
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
})(SubmissionTestset = exports.SubmissionTestset || (exports.SubmissionTestset = {}));
class Submission extends common_1.CodeforcesObject {
    constructor(s) {
        super(s);
        this.problem = new problem_1.Problem(this.problem);
        this.author = new party_1.Party(this.author);
    }
    getLink(text) {
        const contestId = this.contestId ?? 0;
        return `<a href="${common_1.CODEFORCES_URL}${contest_1.Contest.getGymType(contestId)}/${contestId}/submission/${this.id}">${text ?? this.id}</a>`;
    }
}
exports.Submission = Submission;
//# sourceMappingURL=submission.js.map