import { BlogEntryShort } from '../types/blog-entry';
import { RatingChange } from '../types/rating-change';
import { Submission } from '../types/submission';
import { User } from '../types/user';
import { apiRequest, rawApiRequest } from '../utils/api-request';
export const blogEntries = async (options) => {
    return apiRequest(BlogEntryShort, true, 'user.blogEntries', options);
};
export const friends = async (options) => {
    return rawApiRequest('user.friends', options, { ensureAuth: true });
};
export const info = async (options) => {
    return apiRequest(User, true, 'user.info', { handles: options.handles.join(';') });
};
export const ratedList = async (options = {}) => {
    return apiRequest(User, true, 'user.ratedList', options);
};
export const rating = async (options) => {
    return apiRequest(RatingChange, true, 'user.rating', options);
};
export const status = async (options) => {
    return apiRequest(Submission, true, 'user.status', options);
};
//# sourceMappingURL=user.js.map