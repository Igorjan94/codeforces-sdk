"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.standings = exports.ratingChanges = exports.list = exports.hacks = void 0;
const api_request_1 = require("../utils/api-request");
const hacks = async (options) => {
    return (0, api_request_1.apiRequest)('contest.hacks', options);
};
exports.hacks = hacks;
const list = async (options = {}) => {
    return (0, api_request_1.apiRequest)('contest.list', options);
};
exports.list = list;
const ratingChanges = async (options) => {
    return (0, api_request_1.apiRequest)('contest.ratingChanges', options);
};
exports.ratingChanges = ratingChanges;
const standings = async (options) => {
    if (Array.isArray(options.handles)) {
        options.handles = options.handles.join(';');
    }
    return (0, api_request_1.apiRequest)('contest.standings', options);
};
exports.standings = standings;
const status = async (options) => {
    return (0, api_request_1.apiRequest)('contest.status', options);
};
exports.status = status;
//# sourceMappingURL=contest.js.map