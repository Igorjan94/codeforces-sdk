import { RecentAction } from '../types/recent-action';
export type ListOptions = {
    count: number;
};
export declare const list: (options: ListOptions) => Promise<RecentAction[]>;
