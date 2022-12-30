import { CodeforcesObject } from './common';
import { Member } from './member';
export var ParticipantType;
(function (ParticipantType) {
    ParticipantType["CONTESTANT"] = "CONTESTANT";
    ParticipantType["PRACTICE"] = "PRACTICE";
    ParticipantType["VIRTUAL"] = "VIRTUAL";
    ParticipantType["MANAGER"] = "MANAGER";
    ParticipantType["OUT_OF_COMPETITION"] = "OUT_OF_COMPETITION";
})(ParticipantType || (ParticipantType = {}));
export class Party extends CodeforcesObject {
    constructor(p) {
        super(p);
        this.members = this.members.map(member => new Member(member));
    }
}
//# sourceMappingURL=party.js.map