import { CodeforcesObject, Handle } from './common';
export declare class Member extends CodeforcesObject<Member> {
    handle: Handle;
    name?: string;
    toString(): Handle;
}
