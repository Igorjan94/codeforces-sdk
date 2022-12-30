import { CodeforcesObject, ProblemIndex } from './common';
import { ContestId } from './contest';
export declare class ProblemStatistics extends CodeforcesObject<ProblemStatistics> {
    contestId?: ContestId;
    index: ProblemIndex;
    solvedCount: number;
}
