import { BlogEntryShort } from '../types/blog-entry';
import { Handle } from '../types/common';
import { ContestId } from '../types/contest';
import { RatingChange } from '../types/rating-change';
import { Submission } from '../types/submission';
import { User } from '../types/user';
export type BlogEntriesOptions = {
    handle: string;
};
export declare const blogEntries: (options: BlogEntriesOptions) => Promise<BlogEntryShort[]>;
export type FriendsOptions = {
    onlyOnline: boolean;
};
export declare const friends: (options?: FriendsOptions) => Promise<Handle[]>;
export type InfoOptions = {
    handles: Array<Handle>;
};
export declare const info: (options: InfoOptions) => Promise<User[]>;
export type RatedListOptions = {
    activeOnly?: boolean;
    includeRetired?: boolean;
    contestId?: ContestId;
};
export declare const ratedList: (options?: RatedListOptions) => Promise<User[]>;
export type RatingOptions = {
    handle: Handle;
};
export declare const rating: (options: RatingOptions) => Promise<RatingChange[]>;
export type StatusOptions = {
    handle: Handle;
    from?: number;
    count?: number;
};
export declare const status: (options: StatusOptions) => Promise<Submission[]>;
