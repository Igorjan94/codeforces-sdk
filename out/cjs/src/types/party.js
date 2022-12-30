"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = exports.ParticipantType = void 0;
const common_1 = require("./common");
const member_1 = require("./member");
var ParticipantType;
(function (ParticipantType) {
    ParticipantType["CONTESTANT"] = "CONTESTANT";
    ParticipantType["PRACTICE"] = "PRACTICE";
    ParticipantType["VIRTUAL"] = "VIRTUAL";
    ParticipantType["MANAGER"] = "MANAGER";
    ParticipantType["OUT_OF_COMPETITION"] = "OUT_OF_COMPETITION";
})(ParticipantType = exports.ParticipantType || (exports.ParticipantType = {}));
class Party extends common_1.CodeforcesObject {
    constructor(p) {
        super(p);
        this.members = this.members.map(member => new member_1.Member(member));
    }
}
exports.Party = Party;
//# sourceMappingURL=party.js.map