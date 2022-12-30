import { CodeforcesObject } from './common';
import { Problem } from './problem';
import { ProblemStatistics } from './problem-statistics';
export declare class Problemset extends CodeforcesObject<Problemset> {
    problems: Array<Problem>;
    problemStatistics: Array<ProblemStatistics>;
    constructor(p: Problemset);
}
