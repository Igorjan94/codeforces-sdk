import { ProblemsetName } from '../types/common';
import { Problemset } from '../types/problemset';
import { Submission } from '../types/submission';
export type ProblemsOptions = {
    tags?: Array<string> | string;
    problemsetName?: ProblemsetName;
};
export declare const problems: (options?: ProblemsOptions) => Promise<Problemset>;
export type RecentStatusOptions = {
    count: number;
    problemsetName?: ProblemsetName;
};
export declare const recentStatus: (options: RecentStatusOptions) => Promise<Submission[]>;
