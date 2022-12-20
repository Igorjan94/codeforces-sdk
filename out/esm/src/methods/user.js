import { apiRequest } from '../utils/api-request';
export const blogEntries = async (options) => {
    return apiRequest('user.blogEntries', options);
};
export const friends = async (options) => {
    return apiRequest('user.friends', options, { ensureAuth: true });
};
export const info = async (options) => {
    return apiRequest('user.info', { handles: options.handles.join(';') });
};
export const ratedList = async (options = {}) => {
    return apiRequest('user.ratedList', options);
};
export const rating = async (options) => {
    return apiRequest('user.rating', options);
};
export const status = async (options) => {
    return apiRequest('user.status', options);
};
//# sourceMappingURL=user.js.map