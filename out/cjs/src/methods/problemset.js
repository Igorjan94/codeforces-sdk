"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentStatus = exports.problems = void 0;
const problemset_1 = require("../types/problemset");
const submission_1 = require("../types/submission");
const api_request_1 = require("../utils/api-request");
const problems = async (options = {}) => {
    if ('tags' in options) {
        if (Array.isArray(options.tags))
            options.tags = options.tags.join(';');
        if (options.tags)
            options.tags = options.tags.toLowerCase();
    }
    return (0, api_request_1.apiRequest)(problemset_1.Problemset, false, 'problemset.problems', options);
};
exports.problems = problems;
const recentStatus = async (options) => {
    return (0, api_request_1.apiRequest)(submission_1.Submission, true, 'problemset.recentStatus', options);
};
exports.recentStatus = recentStatus;
//# sourceMappingURL=problemset.js.map