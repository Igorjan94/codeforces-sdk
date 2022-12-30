"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const common_1 = require("./common");
class Comment extends common_1.CodeforcesObject {
    getLink(blogEntryId, text) {
        return `<a href='${common_1.CODEFORCES_URL}blog/entry/${blogEntryId}#comment-${this.id}'>${text ?? this.id}</a>`;
    }
}
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map