import { Float } from './common';
import { Party } from './party';
import { ProblemResult } from './problem-result';
export type RanklistRow = {
    party: Party;
    rank: number;
    points: Float;
    penalty: number;
    successfulHackCount: number;
    unsuccessfulHackCount: number;
    problemResults: Array<ProblemResult>;
    lastSubmissionTimeSeconds?: number;
};
