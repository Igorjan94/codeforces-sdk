import { CodeforcesObject, Float, ProblemIndex, ProblemsetName } from './common';
import { ContestId } from './contest';
export declare enum ProblemType {
    PROGRAMMING = "PROGRAMMING",
    QUESTION = "QUESTION"
}
export declare class Problem extends CodeforcesObject<Problem> {
    contestId: ContestId;
    problemsetName?: ProblemsetName;
    index: ProblemIndex;
    name: string;
    type: ProblemType;
    points?: Float;
    rating?: number;
    tags: Array<string>;
    toString(): string;
    getLink(text?: string): string;
}
