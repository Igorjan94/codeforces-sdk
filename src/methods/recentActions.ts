import { RecentAction } from '../types/recent-action'
import { apiRequest } from '../utils/api-request'

export type RecentActionListOptions = {
    count: number
}

export const list = async (options: RecentActionListOptions) => {
    return apiRequest<Array<RecentAction>>('recentActions', {maxCount: options.count})
}


