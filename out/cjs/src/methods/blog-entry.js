"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = exports.comments = void 0;
const blog_entry_1 = require("../types/blog-entry");
const comment_1 = require("../types/comment");
const api_request_1 = require("../utils/api-request");
const comments = async (options) => {
    return (0, api_request_1.apiRequest)(comment_1.Comment, true, 'blogEntry.comments', options);
};
exports.comments = comments;
const view = async (options) => {
    return (0, api_request_1.apiRequest)(blog_entry_1.BlogEntry, false, 'blogEntry.view', options);
};
exports.view = view;
//# sourceMappingURL=blog-entry.js.map