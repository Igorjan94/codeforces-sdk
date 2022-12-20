import fs from 'fs'
import bottleneck from 'bottleneck'
import { httpRequest } from './http-request'
import { DefaultApiOptions } from '../types/common'
const debug = initDebug('index')

let API = 'https://codeforces.com/api/'
let API_INTERVAL = 2000

const limiter = new bottleneck({
    maxConcurrent: 1,
    minTime: API_INTERVAL
})

export type AvailableMethods = 
    'blogEntry.comments' 
    | 'blogEntry.view' 
    | 'contest.hacks' 
    | 'contest.list' 
    | 'contest.ratingChanges' 
    | 'contest.standings' 
    | 'contest.status' 
    | 'problemset.problems' 
    | 'problemset.recentStatus' 
    | 'recentActions' 
    | 'user.blogEntries' 
    | 'user.friends' 
    | 'user.info' 
    | 'user.ratedList' 
    | 'user.rating' 
    | 'user.status'

const apiCodeforcesRequest = async (method: AvailableMethods, options: Record<string, string>) => {
    const searchParams = new URLSearchParams(options)
    return httpRequest(`${API}${method}?${searchParams.toString()}`)
}

const rateLimitedHttpRequest = limiter.wrap(apiCodeforcesRequest)

let defaultOptions: DefaultApiOptions = {}
let getHash
let randomString

const loadCrypto = () => {
    try {
        debug('Loading crypto...')
        const crypto = require('crypto')
        debug('Crypto found')

        getHash = (s: string): string => {
            const hash = crypto.createHash('sha512')
            hash.update(s)
            return hash.digest('hex')
        }

        randomString = (len: number) => {
            return crypto.randomBytes(len).toString('hex').substr(0, len)
        }
    } catch (err) {
        throw new Error('Crypto is not installed for authenticated requests')
    }
}

export const setDefaultOptions = (newOptions: DefaultApiOptions) => {
    defaultOptions = Object.assign(defaultOptions, newOptions)
}

export const readDefaultOptionsFromFile = (filename: string) => {
    debug(`Trying to read config from ${filename}`)
    const f = fs.readFileSync(filename).toString()
    const options: DefaultApiOptions = JSON.parse(f)
    setDefaultOptions(options)
    debug('Config is loaded')
}

export const apiRequest = async <T = any>(method: AvailableMethods, options: object = {}, extra: {ensureAuth: boolean} = {ensureAuth: false}): Promise<T> => {
    const h = defaultOptions
    const reqOptions: any = {...options}
    if ('lang' in defaultOptions)
        reqOptions.lang = defaultOptions.lang
    if (!('key' in defaultOptions) && process.env.CODEFORCES_KEY) {
        defaultOptions
            // @ts-ignore
            .key
                = process.env.CODEFORCES_KEY
    }
    if (!('secret' in defaultOptions) && process.env.CODEFORCES_SECRET) {
        defaultOptions
            // @ts-ignore
            .secret
                = process.env.CODEFORCES_SECRET
    }
    if ('key' in defaultOptions && 'secret' in defaultOptions && defaultOptions.key && defaultOptions.secret) {
        if (!getHash && !randomString)
            loadCrypto()

        const time = Math.round(Date.now() / 1000)
        const rand = randomString(6)

        reqOptions.time = time
        reqOptions.apiKey = defaultOptions.key

        const searchParams = new URLSearchParams(reqOptions)
        searchParams.sort()
        const hash = `${rand}/${method}?${searchParams.toString()}#${defaultOptions.secret}`
        reqOptions.apiSig = `${rand}${getHash(hash)}`
        debug('Request is authorized')
    }
    else if (extra.ensureAuth) {
        throw new Error(`Method ${method} needs authorization. Use 'setDefaultOptions({key, secret})' or 'readDefaultOptionsFromFile(filename)'`)
    }
    return await rateLimitedHttpRequest(method, reqOptions) as T
}
