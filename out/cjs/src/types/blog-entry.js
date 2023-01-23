"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogEntry = exports.BlogEntryShort = void 0;
const common_1 = require("./common");
class BlogEntryShort extends common_1.CodeforcesObject {
    toString() {
        return `${this.title}`;
    }
    getLink(text) {
        return `<a href="${common_1.CODEFORCES_URL}blog/entry/${this.id}">${text ?? this.title}</a>`;
    }
}
exports.BlogEntryShort = BlogEntryShort;
class BlogEntry extends BlogEntryShort {
}
exports.BlogEntry = BlogEntry;
//# sourceMappingURL=blog-entry.js.map