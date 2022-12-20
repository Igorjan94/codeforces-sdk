import { apiRequest } from '../utils/api-request';
export const list = async (options) => {
    return apiRequest('recentActions', { maxCount: options.count });
};
//# sourceMappingURL=recentActions.js.map