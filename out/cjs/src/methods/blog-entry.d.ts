import { BlogEntry, BlogEntryId } from '../types/blog-entry';
import { Comment } from '../types/comment';
export type BlogEntryCommentsOptions = {
    blogEntryId: BlogEntryId;
};
export declare const comments: (options: BlogEntryCommentsOptions) => Promise<Comment[]>;
export type BlogEntryViewOptions = {
    blogEntryId: BlogEntryId;
};
export declare const view: (options: BlogEntryViewOptions) => Promise<BlogEntry>;
