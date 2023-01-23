import { CodeforcesObject, Handle } from './common';
export declare class User extends CodeforcesObject<User> {
    handle: Handle;
    email?: string;
    vkId?: string;
    openId?: string;
    firstName?: string;
    lastName?: string;
    country?: string;
    city?: string;
    organization?: string;
    contribution: number;
    /** User's rank. If user is unrated, then undefined*/
    rank?: string;
    /** User's rating. If user is unrated, then undefined*/
    rating?: number;
    /** User's maximum rank. If user is unrated, then undefined*/
    maxRank?: string;
    /** User's maximum rating. If user is unrated, then undefined*/
    maxRating?: number;
    /** Time, when user was last seen online, in unix format. */
    lastOnlineTimeSeconds: number;
    registrationTimeSeconds: number;
    /** Amount of users who have this user in friends */
    friendOfCount: number;
    /** User's avatar URL */
    avatar: string;
    /** User's title photo URL */
    titlePhoto: string;
    getColor(): "black" | "gray" | "green" | "cyan" | "blue" | "violet" | "orange" | "red" | "legendary";
    getColoredHandle(): any;
    getClass(): string;
    getStyledLink(text?: string): string;
    getLink(text?: string): string;
    private getLinkImpl;
    static getColoredHandle(handle: Handle, users: Record<Handle, User>): any;
}
