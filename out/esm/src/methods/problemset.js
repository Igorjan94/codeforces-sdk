import { Problemset } from '../types/problemset';
import { Submission } from '../types/submission';
import { apiRequest } from '../utils/api-request';
export const problems = async (options = {}) => {
    if ('tags' in options) {
        if (Array.isArray(options.tags))
            options.tags = options.tags.join(';');
        if (options.tags)
            options.tags = options.tags.toLowerCase();
    }
    return apiRequest(Problemset, false, 'problemset.problems', options);
};
export const recentStatus = async (options) => {
    return apiRequest(Submission, true, 'problemset.recentStatus', options);
};
//# sourceMappingURL=problemset.js.map