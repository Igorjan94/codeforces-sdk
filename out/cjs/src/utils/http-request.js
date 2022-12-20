"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequest = void 0;
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const api_error_1 = require("../types/api-error");
const debug = initDebug('api-request');
const httpRequest = async (url, params = {}) => {
    const response = await (0, isomorphic_fetch_1.default)(url, params);
    debug(`Done request to ${response.url}. Status: ${response.status}`);
    const res = await response.json();
    if ('status' in res) {
        if (res.status == 'OK' && 'result' in res)
            return res.result;
        else
            throw new api_error_1.CodeforcesError(response.status, `${res.comment} (${response.url})`, { params });
    }
    throw new Error(`${response.statusText} (${response.url})`);
};
exports.httpRequest = httpRequest;
//# sourceMappingURL=http-request.js.map