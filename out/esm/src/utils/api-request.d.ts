import { DefaultApiOptions } from '../types/common';
export type AvailableMethods = 'blogEntry.comments' | 'blogEntry.view' | 'contest.hacks' | 'contest.list' | 'contest.ratingChanges' | 'contest.standings' | 'contest.status' | 'problemset.problems' | 'problemset.recentStatus' | 'recentActions' | 'user.blogEntries' | 'user.friends' | 'user.info' | 'user.ratedList' | 'user.rating' | 'user.status';
export declare const setDefaultOptions: (newOptions: DefaultApiOptions) => void;
export declare const readDefaultOptionsFromFile: (filename: string) => void;
export declare const apiRequest: <T = any>(method: AvailableMethods, options?: object, extra?: {
    ensureAuth: boolean;
}) => Promise<T>;
