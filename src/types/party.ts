import { CodeforcesObject } from './common'
import { ContestId } from './contest'
import { Member } from './member'

export enum ParticipantType {
    CONTESTANT = 'CONTESTANT',
	PRACTICE = 'PRACTICE',
	VIRTUAL = 'VIRTUAL',
	MANAGER = 'MANAGER',
	OUT_OF_COMPETITION = 'OUT_OF_COMPETITION'
}

export class Party extends CodeforcesObject<Party> {
    contestId?: ContestId
    members: Array<Member>
    participantType: ParticipantType
    teamId?: number
    teamName?: string
    ghost: boolean
    room?: number
    startTimeSeconds?: number

    constructor(p: Party) {
        super(p)
        this.members = this.members.map(member => new Member(member))
    }
}

