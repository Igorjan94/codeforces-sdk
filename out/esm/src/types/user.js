import { CodeforcesObject, CODEFORCES_URL } from './common';
export class User extends CodeforcesObject {
    getLink(text) {
        return `<a href='${CODEFORCES_URL}profile/${this.handle}'>${text || this.handle}</a>`;
    }
}
//# sourceMappingURL=user.js.map