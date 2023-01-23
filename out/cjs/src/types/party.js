"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = exports.ParticipantType = void 0;
const common_1 = require("./common");
const member_1 = require("./member");
const user_1 = require("./user");
var ParticipantType;
(function (ParticipantType) {
    ParticipantType["CONTESTANT"] = "CONTESTANT";
    ParticipantType["PRACTICE"] = "PRACTICE";
    ParticipantType["VIRTUAL"] = "VIRTUAL";
    ParticipantType["MANAGER"] = "MANAGER";
    ParticipantType["OUT_OF_COMPETITION"] = "OUT_OF_COMPETITION";
})(ParticipantType = exports.ParticipantType || (exports.ParticipantType = {}));
class Party extends common_1.CodeforcesObject {
    getType() {
        if (this.ghost)
            return '👻';
        if (this.participantType == ParticipantType.VIRTUAL)
            return '#';
        if (this.participantType == ParticipantType.OUT_OF_COMPETITION)
            return '*';
        if (this.participantType == ParticipantType.MANAGER)
            return '🏢';
        if (this.participantType == ParticipantType.PRACTICE)
            return '💻';
        return '';
    }
    getMembers(options = {}) {
        const members = this.members.map(member => {
            if (options?.withColor)
                return user_1.User.getColoredHandle(member.handle, options?.userInfo || {});
            return member.toString();
        }).join(', ');
        if (options?.noTeamName)
            return members;
        const teamName = this.teamName;
        if (teamName) {
            if (this.members.length)
                return `${teamName} (${members})`;
            else
                return teamName;
        }
        return members;
    }
    toString(options = {}) {
        const members = this.getMembers(options);
        if (options?.noType)
            return members;
        let type = this.getType();
        if (type)
            type += ' ';
        return `${type}${members}`;
    }
    constructor(p) {
        super(p);
        this.members = this.members.map(member => new member_1.Member(member));
    }
}
exports.Party = Party;
//# sourceMappingURL=party.js.map