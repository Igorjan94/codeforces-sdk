import { CodeforcesObject, CODEFORCES_URL } from './common';
export var ContestType;
(function (ContestType) {
    ContestType["CF"] = "CF";
    ContestType["IOI"] = "IOI";
    ContestType["ICPC"] = "ICPC";
})(ContestType || (ContestType = {}));
export var ContestPhase;
(function (ContestPhase) {
    ContestPhase["BEFORE"] = "BEFORE";
    ContestPhase["CODING"] = "CODING";
    ContestPhase["PENDING_SYSTEM_TEST"] = "PENDING_SYSTEM_TEST";
    ContestPhase["SYSTEM_TEST"] = "SYSTEM_TEST";
    ContestPhase["FINISHED"] = "FINISHED";
})(ContestPhase || (ContestPhase = {}));
export class Contest extends CodeforcesObject {
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
        return `<a href='${CODEFORCES_URL}${Contest.getGymType(this.id)}/${this.id}'>${text ?? this.id}</a>`;
    }
}
//# sourceMappingURL=contest.js.map