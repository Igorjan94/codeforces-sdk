import { BlogEntry } from '../types/blog-entry';
import { Comment } from '../types/comment';
import { apiRequest } from '../utils/api-request';
export const comments = async (options) => {
    return apiRequest(Comment, true, 'blogEntry.comments', options);
};
export const view = async (options) => {
    return apiRequest(BlogEntry, false, 'blogEntry.view', options);
};
//# sourceMappingURL=blog-entry.js.map