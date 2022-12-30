export type BlogEntryId = number & {
    __unique: 'BlogEntryId';
};
import { AvailableLanguages, CodeforcesObject, Handle } from './common';
export declare class BlogEntryShort extends CodeforcesObject<BlogEntryShort> {
    id: BlogEntryId;
    originalLocale: AvailableLanguages;
    creationTimeSeconds: number;
    authorHandle: Handle;
    title: string;
    locale: AvailableLanguages;
    modificationTimeSeconds: number;
    allowViewHistory: boolean;
    tags: Array<string>;
    rating: number;
    getLink(text?: string): string;
}
export declare class BlogEntry extends BlogEntryShort {
    content: string;
}
