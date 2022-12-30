import { BlogEntryShort } from './blog-entry';
import { Comment } from './comment';
import { CodeforcesObject } from './common';
export declare class RecentAction extends CodeforcesObject<RecentAction> {
    timeSeconds: number;
    blogEntry?: BlogEntryShort;
    comment?: Comment;
    constructor(r: RecentAction);
}
