import { Contest } from '../types/contest';
import { Hack } from '../types/hack';
import { RatingChange } from '../types/rating-change';
import { Standings } from '../types/standings';
import { Submission } from '../types/submission';
import { apiRequest } from '../utils/api-request';
export const hacks = async (options) => {
    return apiRequest(Hack, true, 'contest.hacks', options);
};
export const list = async (options = {}) => {
    return apiRequest(Contest, true, 'contest.list', options);
};
export const ratingChanges = async (options) => {
    return apiRequest(RatingChange, true, 'contest.ratingChanges', options);
};
export const standings = async (options) => {
    if (Array.isArray(options.handles)) {
        options.handles = options.handles.join(';');
    }
    return apiRequest(Standings, false, 'contest.standings', options);
};
export const status = async (options) => {
    return apiRequest(Submission, true, 'contest.status', options);
};
//# sourceMappingURL=contest.js.map