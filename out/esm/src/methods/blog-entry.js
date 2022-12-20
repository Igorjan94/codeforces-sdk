import { apiRequest } from '../utils/api-request';
export const comments = async (options) => {
    return apiRequest('blogEntry.comments', options);
};
export const view = async (options) => {
    return apiRequest('blogEntry.view', options);
};
//# sourceMappingURL=blog-entry.js.map