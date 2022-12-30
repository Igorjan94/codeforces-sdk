import { BlogEntry, BlogEntryId } from '../types/blog-entry';
import { Comment } from '../types/comment';
export type CommentsOptions = {
    blogEntryId: BlogEntryId;
};
export declare const comments: (options: CommentsOptions) => Promise<Comment[]>;
export type ViewOptions = {
    blogEntryId: BlogEntryId;
};
export declare const view: (options: ViewOptions) => Promise<BlogEntry>;
