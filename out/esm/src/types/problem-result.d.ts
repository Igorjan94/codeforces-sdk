import { CodeforcesObject, Float } from './common';
export declare enum ProblemResultType {
    PRELIMINARY = "PRELIMINARY",
    FINAL = "FINAL"
}
export declare class ProblemResult extends CodeforcesObject<ProblemResult> {
    points: Float;
    penalty?: number;
    rejectedAttemptCount: number;
    type: ProblemResultType;
    bestSubmissionTimeSeconds?: number;
}
