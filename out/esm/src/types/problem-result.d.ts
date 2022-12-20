import { Float } from './common';
export declare enum ProblemResultType {
    PRELIMINARY = "PRELIMINARY",
    FINAL = "FINAL"
}
export type ProblemResult = {
    points: Float;
    penalty?: number;
    rejectedAttemptCount: number;
    type: ProblemResultType;
    bestSubmissionTimeSeconds?: number;
};
