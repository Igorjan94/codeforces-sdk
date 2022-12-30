"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.API = exports.init = void 0;
let sourseMapSupport;
let debugLog;
try {
    sourseMapSupport = require('source-map-support');
    if (sourseMapSupport)
        sourseMapSupport.install();
}
catch (err) {
}
try {
    debugLog = require('debug');
}
catch (err) {
}
globalThis.initDebug = (filename) => {
    const path = ['codeforces-sdk', filename].filter(Boolean).join(':');
    if (debugLog)
        return debugLog(path);
    else
        return (...args) => { };
};
const debug = initDebug('index');
debug('Start');
const api_request_1 = require("./utils/api-request");
exports.init = {
    readDefaultOptionsFromFile: api_request_1.readDefaultOptionsFromFile,
    setDefaultOptions: api_request_1.setDefaultOptions,
};
const API = __importStar(require("./methods"));
exports.API = __importStar(require("./methods"));
exports.Types = __importStar(require("./types"));
exports.default = {
    API,
    init: exports.init,
};
//# sourceMappingURL=index.js.map