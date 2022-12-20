import { BlogEntryShort } from '../types/blog-entry';
import { Handle } from '../types/common';
import { ContestId } from '../types/contest';
import { RatingChange } from '../types/rating-change';
import { Submission } from '../types/submission';
import { User } from '../types/user';
export type UserBlogEntriesOptions = {
    handle: string;
};
export declare const blogEntries: (options: UserBlogEntriesOptions) => Promise<BlogEntryShort[]>;
export type UserFriendsOptions = {
    onlyOnline: boolean;
};
export declare const friends: (options?: UserFriendsOptions) => Promise<Handle[]>;
export type UserInfoOptions = {
    handles: Array<Handle>;
};
export declare const info: (options: UserInfoOptions) => Promise<User[]>;
export type UserRatedListOptions = {
    activeOnly?: boolean;
    includeRetired?: boolean;
    contestId?: ContestId;
};
export declare const ratedList: (options?: UserRatedListOptions) => Promise<User[]>;
export type UserRatingOptions = {
    handle: Handle;
};
export declare const rating: (options: UserRatingOptions) => Promise<RatingChange[]>;
export type UserStatusOptions = {
    handle: Handle;
    from?: number;
    count?: number;
};
export declare const status: (options: UserStatusOptions) => Promise<Submission[]>;
