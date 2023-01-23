import { Handle } from '../types/common';
import { Contest, ContestId } from '../types/contest';
import { Hack } from '../types/hack';
import { RatingChange } from '../types/rating-change';
import { Standings } from '../types/standings';
import { Submission } from '../types/submission';
export type HacksOptions = {
    contestId: ContestId;
};
export declare const hacks: (options: HacksOptions) => Promise<Hack[]>;
export type ListOptions = {
    gym?: boolean;
};
export declare const list: (options?: ListOptions) => Promise<Contest[]>;
export type RatingChangesOptions = {
    contestId: ContestId;
};
export declare const ratingChanges: (options: RatingChangesOptions) => Promise<RatingChange[]>;
export type StandingsOptions = {
    contestId: ContestId;
    from: number;
    count?: number;
    handles?: Handle | Array<Handle>;
    room?: number;
    showUnofficial?: boolean;
};
export declare const standings: (options: StandingsOptions) => Promise<Standings>;
export type StatusOptions = {
    contestId: ContestId;
    handle?: Handle;
    from?: number;
    count?: number;
};
export declare const status: (options: StatusOptions) => Promise<Submission[]>;
