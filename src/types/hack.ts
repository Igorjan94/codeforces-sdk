import { Party } from './party'
import { Problem } from './problem'

export type HackId = number & { __unique: 'HackId' }

export enum HackVerdict {
    HACK_SUCCESSFUL = 'HACK_SUCCESSFUL',
    HACK_UNSUCCESSFUL = 'HACK_UNSUCCESSFUL',
    INVALID_INPUT = 'INVALID_INPUT',
    GENERATOR_INCOMPILABLE = 'GENERATOR_INCOMPILABLE',
    GENERATOR_CRASHED = 'GENERATOR_CRASHED',
    IGNORED = 'IGNORED',
    TESTING = 'TESTING',
    OTHER = 'OTHER'
}

export type Hack = {
    id: HackId
    creationTimeSeconds: number
    hacker: Party
    defender: Party
    verdict?: HackVerdict
    problem: Problem
    test?: string
    judgeProtocol?: {
        manual: 'false' | 'true'
        protocol: string
        verdict: string
    }
}
