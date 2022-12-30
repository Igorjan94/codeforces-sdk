"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contest = exports.ContestPhase = exports.ContestType = void 0;
const common_1 = require("./common");
var ContestType;
(function (ContestType) {
    ContestType["CF"] = "CF";
    ContestType["IOI"] = "IOI";
    ContestType["ICPC"] = "ICPC";
})(ContestType = exports.ContestType || (exports.ContestType = {}));
var ContestPhase;
(function (ContestPhase) {
    ContestPhase["BEFORE"] = "BEFORE";
    ContestPhase["CODING"] = "CODING";
    ContestPhase["PENDING_SYSTEM_TEST"] = "PENDING_SYSTEM_TEST";
    ContestPhase["SYSTEM_TEST"] = "SYSTEM_TEST";
    ContestPhase["FINISHED"] = "FINISHED";
})(ContestPhase = exports.ContestPhase || (exports.ContestPhase = {}));
class Contest extends common_1.CodeforcesObject {
    static getIsGym(contestId) {
        return contestId < 100000;
    }
    static getGymType(contestId) {
        return Contest.getIsGym(contestId) ? 'contest' : 'gym';
    }
    constructor(c) {
        super(c);
        this.isGym = Contest.getIsGym(this.id);
    }
    getLink(text) {
        return `<a href='${common_1.CODEFORCES_URL}${Contest.getGymType(this.id)}/${this.id}'>${text ?? this.id}</a>`;
    }
}
exports.Contest = Contest;
//# sourceMappingURL=contest.js.map