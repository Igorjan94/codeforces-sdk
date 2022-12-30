import { RecentAction } from '../types/recent-action';
import { apiRequest } from '../utils/api-request';
export const list = async (options) => {
    return apiRequest(RecentAction, true, 'recentActions', { maxCount: options.count });
};
//# sourceMappingURL=recentActions.js.map