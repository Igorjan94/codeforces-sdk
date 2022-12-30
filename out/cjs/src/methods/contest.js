"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.standings = exports.ratingChanges = exports.list = exports.hacks = void 0;
const contest_1 = require("../types/contest");
const hack_1 = require("../types/hack");
const rating_change_1 = require("../types/rating-change");
const standings_1 = require("../types/standings");
const submission_1 = require("../types/submission");
const api_request_1 = require("../utils/api-request");
const hacks = async (options) => {
    return (0, api_request_1.apiRequest)(hack_1.Hack, true, 'contest.hacks', options);
};
exports.hacks = hacks;
const list = async (options = {}) => {
    return (0, api_request_1.apiRequest)(contest_1.Contest, true, 'contest.list', options);
};
exports.list = list;
const ratingChanges = async (options) => {
    return (0, api_request_1.apiRequest)(rating_change_1.RatingChange, true, 'contest.ratingChanges', options);
};
exports.ratingChanges = ratingChanges;
const standings = async (options) => {
    if (Array.isArray(options.handles)) {
        options.handles = options.handles.join(';');
    }
    return (0, api_request_1.apiRequest)(standings_1.Standings, false, 'contest.standings', options);
};
exports.standings = standings;
const status = async (options) => {
    return (0, api_request_1.apiRequest)(submission_1.Submission, true, 'contest.status', options);
};
exports.status = status;
//# sourceMappingURL=contest.js.map