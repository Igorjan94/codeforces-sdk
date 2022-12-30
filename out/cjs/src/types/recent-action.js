"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentAction = void 0;
const blog_entry_1 = require("./blog-entry");
const comment_1 = require("./comment");
const common_1 = require("./common");
class RecentAction extends common_1.CodeforcesObject {
    constructor(r) {
        super(r);
        if (this.comment)
            this.comment = new comment_1.Comment(this.comment);
        if (this.blogEntry)
            this.blogEntry = new blog_entry_1.BlogEntryShort(this.blogEntry);
    }
}
exports.RecentAction = RecentAction;
//# sourceMappingURL=recent-action.js.map