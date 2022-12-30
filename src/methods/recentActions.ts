import { RecentAction } from '../types/recent-action'
import { apiRequest } from '../utils/api-request'

export type ListOptions = {
    count: number
}

export const list = async (options: ListOptions) => {
    return apiRequest(RecentAction, true, 'recentActions', {maxCount: options.count})
}


