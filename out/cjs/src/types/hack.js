"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hack = exports.HackVerdict = void 0;
const common_1 = require("./common");
const party_1 = require("./party");
const problem_1 = require("./problem");
var HackVerdict;
(function (HackVerdict) {
    HackVerdict["HACK_SUCCESSFUL"] = "HACK_SUCCESSFUL";
    HackVerdict["HACK_UNSUCCESSFUL"] = "HACK_UNSUCCESSFUL";
    HackVerdict["INVALID_INPUT"] = "INVALID_INPUT";
    HackVerdict["GENERATOR_INCOMPILABLE"] = "GENERATOR_INCOMPILABLE";
    HackVerdict["GENERATOR_CRASHED"] = "GENERATOR_CRASHED";
    HackVerdict["IGNORED"] = "IGNORED";
    HackVerdict["TESTING"] = "TESTING";
    HackVerdict["OTHER"] = "OTHER";
})(HackVerdict = exports.HackVerdict || (exports.HackVerdict = {}));
class Hack extends common_1.CodeforcesObject {
    constructor(h) {
        super(h);
        this.hacker = new party_1.Party(this.hacker);
        this.defender = new party_1.Party(this.defender);
        this.problem = new problem_1.Problem(this.problem);
    }
    getLink(constestId, text) {
        return `<a href="${common_1.CODEFORCES_URL}contest/${constestId}/hacks/${this.id}">${text ?? this.id}</a>`;
    }
}
exports.Hack = Hack;
//# sourceMappingURL=hack.js.map