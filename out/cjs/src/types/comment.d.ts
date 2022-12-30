import { BlogEntryId } from './blog-entry';
import { AvailableLanguages, CodeforcesObject, Handle } from './common';
export type CommentId = number & {
    __unique: 'CommentId';
};
export declare class Comment extends CodeforcesObject<Comment> {
    id: CommentId;
    creationTimeSeconds: number;
    commentatorHandle: Handle;
    locale: AvailableLanguages;
    text: string;
    parentCommentId?: CommentId;
    rating: number;
    getLink(blogEntryId: BlogEntryId, text?: string): string;
}
