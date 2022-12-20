import { Handle } from './common'

export enum ContestType {
    CF = 'CF',
    IOI = 'IOI',
    ICPC = 'ICPC'
}

export enum ContestPhase {
    BEFORE = 'BEFORE',
    CODING = 'CODING',
    PENDING_SYSTEM_TEST = 'PENDING_SYSTEM_TEST',
    SYSTEM_TEST = 'SYSTEM_TEST',
    FINISHED = 'FINISHED'
}

export type ContestDifficulty = 1 | 2 | 3 | 4 | 5

export type ContestId = number & { __unique: 'ContestId' }

export type Contest = {
    id: ContestId
    name: string
    type: ContestType
    phase: ContestPhase
    frozen: boolean
    durationSeconds: number
    startTimeSeconds?: number
    relativeTimeSeconds?: number
    preparedBy?: Handle
    websiteUrl?: string
    description?: string
    difficulty?: ContestDifficulty
    kind?: string
    icpcRegion?: string
    country?: string
    city?: string
    season?: string
}

