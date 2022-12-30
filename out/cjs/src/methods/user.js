"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.rating = exports.ratedList = exports.info = exports.friends = exports.blogEntries = void 0;
const blog_entry_1 = require("../types/blog-entry");
const rating_change_1 = require("../types/rating-change");
const submission_1 = require("../types/submission");
const user_1 = require("../types/user");
const api_request_1 = require("../utils/api-request");
const blogEntries = async (options) => {
    return (0, api_request_1.apiRequest)(blog_entry_1.BlogEntryShort, true, 'user.blogEntries', options);
};
exports.blogEntries = blogEntries;
const friends = async (options) => {
    return (0, api_request_1.rawApiRequest)('user.friends', options, { ensureAuth: true });
};
exports.friends = friends;
const info = async (options) => {
    return (0, api_request_1.apiRequest)(user_1.User, true, 'user.info', { handles: options.handles.join(';') });
};
exports.info = info;
const ratedList = async (options = {}) => {
    return (0, api_request_1.apiRequest)(user_1.User, true, 'user.ratedList', options);
};
exports.ratedList = ratedList;
const rating = async (options) => {
    return (0, api_request_1.apiRequest)(rating_change_1.RatingChange, true, 'user.rating', options);
};
exports.rating = rating;
const status = async (options) => {
    return (0, api_request_1.apiRequest)(submission_1.Submission, true, 'user.status', options);
};
exports.status = status;
//# sourceMappingURL=user.js.map