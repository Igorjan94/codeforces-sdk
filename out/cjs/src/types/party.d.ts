import { CodeforcesObject, Handle } from './common';
import { ContestId } from './contest';
import { Member } from './member';
import { User } from './user';
export declare enum ParticipantType {
    CONTESTANT = "CONTESTANT",
    PRACTICE = "PRACTICE",
    VIRTUAL = "VIRTUAL",
    MANAGER = "MANAGER",
    OUT_OF_COMPETITION = "OUT_OF_COMPETITION"
}
type Members123 = [Member] | [Member, Member] | [Member, Member, Member];
export declare class Party extends CodeforcesObject<Party> {
    contestId?: ContestId;
    members: Members123;
    participantType: ParticipantType;
    teamId?: number;
    teamName?: string;
    ghost: boolean;
    room?: number;
    startTimeSeconds?: number;
    getType(): "" | "👻" | "#" | "*" | "🏢" | "💻";
    getMembers(options?: {
        userInfo?: Record<Handle, User>;
        withColor?: boolean;
        noTeamName?: boolean;
    }): string;
    toString(options?: {
        userInfo?: Record<Handle, User>;
        withColor?: boolean;
        noTeamName?: boolean;
        noType?: boolean;
    }): string;
    constructor(p: Party);
}
export {};
