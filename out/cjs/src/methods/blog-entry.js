"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = exports.comments = void 0;
const api_request_1 = require("../utils/api-request");
const comments = async (options) => {
    return (0, api_request_1.apiRequest)('blogEntry.comments', options);
};
exports.comments = comments;
const view = async (options) => {
    return (0, api_request_1.apiRequest)('blogEntry.view', options);
};
exports.view = view;
//# sourceMappingURL=blog-entry.js.map