"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.rating = exports.ratedList = exports.info = exports.friends = exports.blogEntries = void 0;
const api_request_1 = require("../utils/api-request");
const blogEntries = async (options) => {
    return (0, api_request_1.apiRequest)('user.blogEntries', options);
};
exports.blogEntries = blogEntries;
const friends = async (options) => {
    return (0, api_request_1.apiRequest)('user.friends', options, { ensureAuth: true });
};
exports.friends = friends;
const info = async (options) => {
    return (0, api_request_1.apiRequest)('user.info', { handles: options.handles.join(';') });
};
exports.info = info;
const ratedList = async (options = {}) => {
    return (0, api_request_1.apiRequest)('user.ratedList', options);
};
exports.ratedList = ratedList;
const rating = async (options) => {
    return (0, api_request_1.apiRequest)('user.rating', options);
};
exports.rating = rating;
const status = async (options) => {
    return (0, api_request_1.apiRequest)('user.status', options);
};
exports.status = status;
//# sourceMappingURL=user.js.map