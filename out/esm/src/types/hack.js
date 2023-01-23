import { CodeforcesObject, CODEFORCES_URL } from './common';
import { Party } from './party';
import { Problem } from './problem';
export var HackVerdict;
(function (HackVerdict) {
    HackVerdict["HACK_SUCCESSFUL"] = "HACK_SUCCESSFUL";
    HackVerdict["HACK_UNSUCCESSFUL"] = "HACK_UNSUCCESSFUL";
    HackVerdict["INVALID_INPUT"] = "INVALID_INPUT";
    HackVerdict["GENERATOR_INCOMPILABLE"] = "GENERATOR_INCOMPILABLE";
    HackVerdict["GENERATOR_CRASHED"] = "GENERATOR_CRASHED";
    HackVerdict["IGNORED"] = "IGNORED";
    HackVerdict["TESTING"] = "TESTING";
    HackVerdict["OTHER"] = "OTHER";
})(HackVerdict || (HackVerdict = {}));
export class Hack extends CodeforcesObject {
    constructor(h) {
        super(h);
        this.hacker = new Party(this.hacker);
        this.defender = new Party(this.defender);
        this.problem = new Problem(this.problem);
    }
    getLink(constestId, text) {
        return `<a href="${CODEFORCES_URL}contest/${constestId}/hacks/${this.id}">${text ?? this.id}</a>`;
    }
}
//# sourceMappingURL=hack.js.map