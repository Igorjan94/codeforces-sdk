import { CodeforcesObject, Float } from './common';
import { Contest } from './contest';
import { Party } from './party';
import { ProblemResult } from './problem-result';
export declare class RanklistRow extends CodeforcesObject<RanklistRow> {
    contest: Contest;
    party: Party;
    rank: number;
    points: Float;
    penalty: number;
    successfulHackCount: number;
    unsuccessfulHackCount: number;
    problemResults: Array<ProblemResult>;
    /** For IOI contests only */
    lastSubmissionTimeSeconds?: number;
    constructor(r: RanklistRow, c: Contest);
}
