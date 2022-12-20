import { Handle } from './common';
import { ContestId } from './contest';
export type RatingChange = {
    contestId: ContestId;
    contestName: string;
    handle: Handle;
    rank: number;
    ratingUpdateTimeSeconds: number;
    oldRating: number;
    newRating: number;
};
