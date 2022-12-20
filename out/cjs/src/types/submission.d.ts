import { Float } from './common';
import { ContestId } from './contest';
import { Party } from './party';
import { Problem } from './problem';
export declare enum SubmissionVerdict {
    FAILED = "FAILED",
    OK = "OK",
    PARTIAL = "PARTIAL",
    COMPILATION_ERROR = "COMPILATION_ERROR",
    RUNTIME_ERROR = "RUNTIME_ERROR",
    WRONG_ANSWER = "WRONG_ANSWER",
    PRESENTATION_ERROR = "PRESENTATION_ERROR",
    TIME_LIMIT_EXCEEDED = "TIME_LIMIT_EXCEEDED",
    MEMORY_LIMIT_EXCEEDED = "MEMORY_LIMIT_EXCEEDED",
    IDLENESS_LIMIT_EXCEEDED = "IDLENESS_LIMIT_EXCEEDED",
    SECURITY_VIOLATED = "SECURITY_VIOLATED",
    CRASHED = "CRASHED",
    INPUT_PREPARATION_CRASHED = "INPUT_PREPARATION_CRASHED",
    CHALLENGED = "CHALLENGED",
    SKIPPED = "SKIPPED",
    TESTING = "TESTING",
    REJECTED = "REJECTED"
}
export declare enum SubmissionTestset {
    SAMPLES = "SAMPLES",
    PRETESTS = "PRETESTS",
    TESTS = "TESTS",
    CHALLENGES = "CHALLENGES",
    TESTS1 = "TESTS1",
    TESTS2 = "TESTS2",
    TESTS3 = "TESTS3",
    TESTS4 = "TESTS4",
    TESTS5 = "TESTS5",
    TESTS6 = "TESTS6",
    TESTS7 = "TESTS7",
    TESTS8 = "TESTS8",
    TESTS9 = "TESTS9",
    TESTS10 = "TESTS10"
}
export type SubmissionId = number & {
    __unique: 'SubmissionId';
};
export type Submission = {
    id: SubmissionId;
    contestId?: ContestId;
    creationTimeSeconds: number;
    relativeTimeSeconds: number;
    problem: Problem;
    author: Party;
    programmingLanguage: string;
    verdict?: SubmissionVerdict;
    testset: SubmissionTestset;
    passedTestCount: number;
    timeConsumedMillis: number;
    memoryConsumedBytes: number;
    points?: Float;
};
