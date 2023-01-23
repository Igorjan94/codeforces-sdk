import { CodeforcesObject, CODEFORCES_URL } from './common';
export class BlogEntryShort extends CodeforcesObject {
    toString() {
        return `${this.title}`;
    }
    getLink(text) {
        return `<a href="${CODEFORCES_URL}blog/entry/${this.id}">${text ?? this.title}</a>`;
    }
}
export class BlogEntry extends BlogEntryShort {
}
//# sourceMappingURL=blog-entry.js.map