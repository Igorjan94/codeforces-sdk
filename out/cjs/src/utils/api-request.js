"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequest = exports.readDefaultOptionsFromFile = exports.setDefaultOptions = void 0;
const fs_1 = __importDefault(require("fs"));
const bottleneck_1 = __importDefault(require("bottleneck"));
const http_request_1 = require("./http-request");
const debug = initDebug('index');
let API = 'https://codeforces.com/api/';
let API_INTERVAL = 2000;
const limiter = new bottleneck_1.default({
    maxConcurrent: 1,
    minTime: API_INTERVAL
});
const apiCodeforcesRequest = async (method, options) => {
    const searchParams = new URLSearchParams(options);
    return (0, http_request_1.httpRequest)(`${API}${method}?${searchParams.toString()}`);
};
const rateLimitedHttpRequest = limiter.wrap(apiCodeforcesRequest);
let defaultOptions = {};
let getHash;
let randomString;
const loadCrypto = () => {
    try {
        debug('Loading crypto...');
        const crypto = require('crypto');
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
const setDefaultOptions = (newOptions) => {
    defaultOptions = Object.assign(defaultOptions, newOptions);
};
exports.setDefaultOptions = setDefaultOptions;
const readDefaultOptionsFromFile = (filename) => {
    debug(`Trying to read config from ${filename}`);
    const f = fs_1.default.readFileSync(filename).toString();
    const options = JSON.parse(f);
    (0, exports.setDefaultOptions)(options);
    debug('Config is loaded');
};
exports.readDefaultOptionsFromFile = readDefaultOptionsFromFile;
const apiRequest = async (method, options = {}, extra = { ensureAuth: false }) => {
    const h = defaultOptions;
    const reqOptions = { ...options };
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
        const searchParams = new URLSearchParams(reqOptions);
        searchParams.sort();
        const hash = `${rand}/${method}?${searchParams.toString()}#${defaultOptions.secret}`;
        reqOptions.apiSig = `${rand}${getHash(hash)}`;
        debug('Request is authorized');
    }
    else if (extra.ensureAuth) {
        throw new Error(`Method ${method} needs authorization. Use 'setDefaultOptions({key, secret})' or 'readDefaultOptionsFromFile(filename)'`);
    }
    return await rateLimitedHttpRequest(method, reqOptions);
};
exports.apiRequest = apiRequest;
//# sourceMappingURL=api-request.js.map