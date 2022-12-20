import { ContestId } from './contest';
import { Member } from './member';
export declare enum ParticipantType {
    CONTESTANT = "CONTESTANT",
    PRACTICE = "PRACTICE",
    VIRTUAL = "VIRTUAL",
    MANAGER = "MANAGER",
    OUT_OF_COMPETITION = "OUT_OF_COMPETITION"
}
export type Party = {
    contestId?: ContestId;
    members: Array<Member>;
    participantType: ParticipantType;
    teamId?: number;
    teamName?: string;
    ghost: boolean;
    room?: number;
    startTimeSeconds?: number;
};
