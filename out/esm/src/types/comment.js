import { CodeforcesObject, CODEFORCES_URL } from './common';
export class Comment extends CodeforcesObject {
    toString() {
        return `${this.text}`;
    }
    getLink(blogEntryId, text) {
        return `<a href="${CODEFORCES_URL}blog/entry/${blogEntryId}#comment-${this.id}">${text ?? this.id}</a>`;
    }
}
//# sourceMappingURL=comment.js.map