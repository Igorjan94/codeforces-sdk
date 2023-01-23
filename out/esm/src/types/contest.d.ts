import { CodeforcesObject, Handle } from './common';
export declare enum ContestType {
    CF = "CF",
    IOI = "IOI",
    ICPC = "ICPC"
}
export declare enum ContestPhase {
    BEFORE = "BEFORE",
    CODING = "CODING",
    PENDING_SYSTEM_TEST = "PENDING_SYSTEM_TEST",
    SYSTEM_TEST = "SYSTEM_TEST",
    FINISHED = "FINISHED"
}
export type ContestDifficulty = 1 | 2 | 3 | 4 | 5;
export type ContestId = number & {
    __unique: 'ContestId';
};
export declare class Contest extends CodeforcesObject<Contest> {
    static getIsGym(contestId: ContestId): boolean;
    static getGymType(contestId: ContestId): "contest" | "gym";
    id: ContestId;
    name: string;
    type: ContestType;
    phase: ContestPhase;
    frozen: boolean;
    durationSeconds: number;
    startTimeSeconds?: number;
    relativeTimeSeconds?: number;
    preparedBy?: Handle;
    websiteUrl?: string;
    description?: string;
    difficulty?: ContestDifficulty;
    /** Human-readable type of the contest from the following categories: Official ICPC Contest, Official School Contest, Opencup Contest, School/University/City/Region Championship, Training Camp Contest, Official International Personal Contest, Training Contest */
    kind?: string;
    icpcRegion?: string;
    country?: string;
    city?: string;
    season?: string;
    isGym: boolean;
    toString(): string;
    constructor(c: Contest);
    getLink(text?: string): string;
}
