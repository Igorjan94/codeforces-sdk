import { CodeforcesObject } from './common';
import { Contest } from './contest';
import { Problem } from './problem';
import { RanklistRow } from './ranklist-row';
export declare class Standings extends CodeforcesObject<Standings> {
    contest: Contest;
    problems: Array<Problem>;
    rows: Array<RanklistRow>;
    constructor(s: Standings);
    getLink(text?: string): string;
}
