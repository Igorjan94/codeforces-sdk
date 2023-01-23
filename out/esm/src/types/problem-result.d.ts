import { CodeforcesObject, Float } from './common';
import { Contest } from './contest';
export declare enum ProblemResultType {
    PRELIMINARY = "PRELIMINARY",
    FINAL = "FINAL"
}
export declare class ProblemResult extends CodeforcesObject<ProblemResult> {
    contest: Contest;
    points: Float;
    /** Penalty (in ICPC meaning) of the party for this problem */
    penalty?: number;
    rejectedAttemptCount: number;
    type: ProblemResultType;
    bestSubmissionTimeSeconds?: number;
    constructor(pr: ProblemResult, c: Contest);
    getRelativeTime(): string;
    private wrapResult;
    getResult(withColor?: boolean): any;
    toString(options?: {
        withTime?: boolean;
        withColor?: boolean;
    }): any;
}
