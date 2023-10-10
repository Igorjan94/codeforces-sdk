import fs from 'fs';
import { httpRequest } from './http-request';
const debug = initDebug('index');
import bottleneck from 'bottleneck';
let API = 'https://codeforces.com/api/';
let API_INTERVAL = 2000;
const limiter = new bottleneck({
    maxConcurrent: 1,
    minTime: API_INTERVAL
});
const apiCodeforcesRequest = async (method, options) => {
    const searchParams = new URLSearchParams(options);
    return httpRequest(`${API}${method}?${searchParams.toString()}`);
};
const rateLimitedHttpRequest = limiter.wrap(apiCodeforcesRequest);
let defaultOptions = {};
let getHash;
let randomString;
const loadCrypto = () => {
    try {
        debug('Loading crypto...');
        const crypto = require('node:crypto');
        debug('Crypto found');
        getHash = (s) => {
            const hash = crypto.createHash('sha512');
            hash.update(s);
            return hash.digest('hex');
        };
        randomString = (len) => {
            return crypto.randomBytes(len).toString('hex').substr(0, len);
        };
    }
    catch (err) {
        throw new Error('Crypto is not installed for authenticated requests');
    }
};
export const setDefaultOptions = (newOptions) => {
    defaultOptions = Object.assign(defaultOptions, newOptions);
};
export const readDefaultOptionsFromFile = (filename) => {
    debug(`Trying to read config from ${filename}`);
    const f = fs.readFileSync(filename).toString();
    const options = JSON.parse(f);
    setDefaultOptions(options);
    debug('Config is loaded');
};
export const rawApiRequest = async (method, options = {}, extra = { ensureAuth: false }) => {
    const h = defaultOptions;
    const reqOptions = { ...options };
    if (!('lang' in defaultOptions) && process.env.CODEFORCES_LANG) {
        defaultOptions
            // @ts-ignore
            .lang
            = process.env.CODEFORCES_LANG;
    }
    if ('lang' in defaultOptions)
        reqOptions.lang = defaultOptions.lang;
    if (!('key' in defaultOptions) && process.env.CODEFORCES_KEY) {
        defaultOptions
            // @ts-ignore
            .key
            = process.env.CODEFORCES_KEY;
    }
    if (!('secret' in defaultOptions) && process.env.CODEFORCES_SECRET) {
        defaultOptions
            // @ts-ignore
            .secret
            = process.env.CODEFORCES_SECRET;
    }
    if ('key' in defaultOptions && 'secret' in defaultOptions && defaultOptions.key && defaultOptions.secret) {
        if (!getHash && !randomString)
            loadCrypto();
        const time = Math.round(Date.now() / 1000);
        const rand = randomString(6);
        reqOptions.time = time;
        reqOptions.apiKey = defaultOptions.key;
        const searchParams = Object.entries(reqOptions).sort((a, b) => a < b ? -1 : a > b ? 1 : 0).map(([k, v]) => `${k}=${v}`).join('&');
        const hash = `${rand}/${method}?${searchParams}#${defaultOptions.secret}`;
        reqOptions.apiSig = `${rand}${getHash(hash)}`;
        debug('Request is authorized');
    }
    else if (extra.ensureAuth) {
        throw new Error(`Method ${method} needs authorization. Use 'setDefaultOptions({key, secret})' or 'readDefaultOptionsFromFile(filename)'`);
    }
    const res = await rateLimitedHttpRequest(method, reqOptions);
    return res;
};
export const apiRequest = async (type, isArray, method, options = {}, extra = { ensureAuth: false }) => {
    const res = await rawApiRequest(method, options, extra);
    if (Array.isArray(res) && isArray)
        return res.map(one => new type(one));
    else
        return new type(res);
};
//# sourceMappingURL=api-request.js.map