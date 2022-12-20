import { apiRequest } from '../utils/api-request';
export const problems = async (options = {}) => {
    if ('tags' in options) {
        if (Array.isArray(options.tags))
            options.tags = options.tags.join(';');
        if (options.tags)
            options.tags = options.tags.toLowerCase();
    }
    return apiRequest('problemset.problems', options);
};
export const recentStatus = async (options) => {
    return apiRequest('problemset.recentStatus', options);
};
//# sourceMappingURL=problemset.js.map