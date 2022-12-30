import { CodeforcesObject, CODEFORCES_URL, Handle } from './common'

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

export class Contest extends CodeforcesObject<Contest> {
    static getIsGym(contestId: ContestId) {
        return contestId < 100000
    }

    static getGymType(contestId: ContestId) {
        return Contest.getIsGym(contestId) ? 'contest' : 'gym'
    }

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
    /** Human-readable type of the contest from the following categories: Official ICPC Contest, Official School Contest, Opencup Contest, School/University/City/Region Championship, Training Camp Contest, Official International Personal Contest, Training Contest */
    kind?: string
    icpcRegion?: string
    country?: string
    city?: string
    season?: string
    isGym: boolean

    constructor(c: Contest) {
        super(c)
        this.isGym = Contest.getIsGym(this.id)
    }

    getLink(text?: string) {
        return `<a href='${CODEFORCES_URL}${Contest.getGymType(this.id)}/${this.id}'>${text ?? this.id}</a>`
    }
}

