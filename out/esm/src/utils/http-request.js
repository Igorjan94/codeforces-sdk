import fetch from 'isomorphic-fetch';
import { CodeforcesError } from '../types/api-error';
const debug = initDebug('api-request');
export const httpRequest = async (url, params = {}) => {
    const response = await fetch(url, params);
    debug(`Done request to ${response.url}. Status: ${response.status}`);
    const res = await response.json();
    if ('status' in res) {
        if (res.status == 'OK' && 'result' in res)
            return res.result;
        else
            throw new CodeforcesError(response.status, `${res.comment} (${response.url})`, { params });
    }
    throw new Error(`${response.statusText} (${response.url})`);
};
//# sourceMappingURL=http-request.js.map