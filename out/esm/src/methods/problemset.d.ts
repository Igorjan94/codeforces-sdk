import { ProblemsetName } from '../types/common';
import { Problem } from '../types/problem';
import { ProblemStatistics } from '../types/problem-statistics';
import { Submission } from '../types/submission';
export type ProblemsetProblemsOptions = {
    tags?: Array<string> | string;
    problemsetName?: ProblemsetName;
};
export declare const problems: (options?: ProblemsetProblemsOptions) => Promise<{
    problems: Array<Problem>;
    problemStatistics: Array<ProblemStatistics>;
}>;
export type ProblemsetRecentStatusOptions = {
    count: number;
    problemsetName?: ProblemsetName;
};
export declare const recentStatus: (options: ProblemsetRecentStatusOptions) => Promise<Submission[]>;
