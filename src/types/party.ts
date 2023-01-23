import { CodeforcesObject, Handle } from './common'
import { ContestId } from './contest'
import { Member } from './member'
import { User } from './user'

export enum ParticipantType {
    CONTESTANT = 'CONTESTANT',
	PRACTICE = 'PRACTICE',
	VIRTUAL = 'VIRTUAL',
	MANAGER = 'MANAGER',
	OUT_OF_COMPETITION = 'OUT_OF_COMPETITION'
}

type Members123 = [Member] | [Member, Member] | [Member, Member, Member]

export class Party extends CodeforcesObject<Party> {
    contestId?: ContestId
    members: Members123
    participantType: ParticipantType
    teamId?: number
    teamName?: string
    ghost: boolean
    room?: number
    startTimeSeconds?: number

    getType() {
        if (this.ghost)
            return '👻'
        if (this.participantType == ParticipantType.VIRTUAL)
            return '#'
        if (this.participantType == ParticipantType.OUT_OF_COMPETITION)
            return '*'
        if (this.participantType == ParticipantType.MANAGER)
            return '🏢'
        if (this.participantType == ParticipantType.PRACTICE)
            return '💻'
        return ''        
    }

    getMembers(options: {userInfo?: Record<Handle, User>, withColor?: boolean, noTeamName?: boolean} = {}) {
        const members = (this.members as Array<Member>).map(member => {
            if (options?.withColor)
                return User.getColoredHandle(member.handle, options?.userInfo || {})
            return member.toString()
        }).join(', ')

        if (options?.noTeamName)
            return members

        const teamName = this.teamName
        if (teamName) {
            if (this.members.length)
                return `${teamName} (${members})`
            else
                return teamName
        }
        return members
    }

    toString(options: {userInfo?: Record<Handle, User>, withColor?: boolean, noTeamName?: boolean, noType?: boolean} = {}) {
        const members = this.getMembers(options)
        if (options?.noType)
            return members

        let type = this.getType()
        if (type) type += ' '
        return `${type}${members}`
    }

    constructor(p: Party) {
        super(p)
        this.members = this.members.map(member => new Member(member)) as Members123
    }
}

