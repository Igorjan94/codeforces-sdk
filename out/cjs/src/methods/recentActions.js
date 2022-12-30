"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const recent_action_1 = require("../types/recent-action");
const api_request_1 = require("../utils/api-request");
const list = async (options) => {
    return (0, api_request_1.apiRequest)(recent_action_1.RecentAction, true, 'recentActions', { maxCount: options.count });
};
exports.list = list;
//# sourceMappingURL=recentActions.js.map