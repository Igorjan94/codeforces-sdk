import { CodeforcesObject, Handle } from './common'

export class Member extends CodeforcesObject<Member> {
    handle: Handle
    name?: string

    toString() {
        return this.handle
    }
}
