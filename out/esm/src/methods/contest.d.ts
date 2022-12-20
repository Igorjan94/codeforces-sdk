import { Contest, ContestId } from '../types/contest';
import { Hack } from '../types/hack';
import { Problem } from '../types/problem';
import { RanklistRow } from '../types/ranklist-row';
import { RatingChange } from '../types/rating-change';
import { Submission } from '../types/submission';
export type ContestHacksOptions = {
    contestId: ContestId;
};
export declare const hacks: (options: ContestHacksOptions) => Promise<Hack[]>;
export type ContestListOptions = {
    gym?: boolean;
};
export declare const list: (options?: ContestListOptions) => Promise<Contest[]>;
export type ContestRatingChangesOptions = {
    contestId: ContestId;
};
export declare const ratingChanges: (options: ContestRatingChangesOptions) => Promise<RatingChange[]>;
export type ContestStandingsOptions = {
    contestId: ContestId;
    from: number;
    count?: number;
    handles?: string | Array<string>;
    room?: number;
    showUnofficial?: boolean;
};
export declare const standings: (options: ContestStandingsOptions) => Promise<{
    contest: Contest;
    problems: Array<Problem>;
    rows: Array<RanklistRow>;
}>;
export type ContestStatusOptions = {
    contestId: ContestId;
    handle?: string;
    from?: number;
    count?: number;
};
export declare const status: (options: ContestStatusOptions) => Promise<Submission[]>;
