let sourseMapSupport
let debugLog

try {
    sourseMapSupport = require('source-map-support')
    if (sourseMapSupport)
        sourseMapSupport.install()
} catch (err) {
}

try {
    debugLog = require('debug')
} catch (err) {
}

globalThis.initDebug = (filename: string): (...args: any[]) => void => {
    const path = ['codeforces-sdk', filename].filter(Boolean).join(':')
    if (debugLog)
        return debugLog(path)
    else
        return (...args: any[]) => {}
}

declare global {
    function initDebug(filename: string): (...args: any[]) => void
}


const debug = initDebug('index')
debug('Start')

import {
    readDefaultOptionsFromFile,
    setDefaultOptions,
} from './utils/api-request'
import * as ImportedAPI from './methods'

export const init = {
    readDefaultOptionsFromFile,
    setDefaultOptions,
}

export const API = ImportedAPI

export * as Types from './types'

export default {
    API,
    init,
}
