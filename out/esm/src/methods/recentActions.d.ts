import { RecentAction } from '../types/recent-action';
export type RecentActionListOptions = {
    count: number;
};
export declare const list: (options: RecentActionListOptions) => Promise<RecentAction[]>;
