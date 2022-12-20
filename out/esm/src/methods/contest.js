import { apiRequest } from '../utils/api-request';
export const hacks = async (options) => {
    return apiRequest('contest.hacks', options);
};
export const list = async (options = {}) => {
    return apiRequest('contest.list', options);
};
export const ratingChanges = async (options) => {
    return apiRequest('contest.ratingChanges', options);
};
export const standings = async (options) => {
    if (Array.isArray(options.handles)) {
        options.handles = options.handles.join(';');
    }
    return apiRequest('contest.standings', options);
};
export const status = async (options) => {
    return apiRequest('contest.status', options);
};
//# sourceMappingURL=contest.js.map