import { CodeforcesObject, CODEFORCES_URL, Handle } from './common'

export const COLORS = [
    'black',
	'gray',
	'green',
	'cyan',
	'blue',
	'violet',
	'orange',
	'red',
	'legendary' 
] as const
export type Color = (typeof COLORS)[number]

let clc

try {
    clc = require('cli-color')
} catch (e) {}

export class User extends CodeforcesObject<User> {
    handle: Handle
    email?: string
    vkId?: string
    openId?: string
    firstName?: string
    lastName?: string
    country?: string
    city?: string
    organization?: string
    contribution: number
    /** User's rank. If user is unrated, then undefined*/
    rank?: string
    /** User's rating. If user is unrated, then undefined*/
    rating?: number
    /** User's maximum rank. If user is unrated, then undefined*/
    maxRank?: string
    /** User's maximum rating. If user is unrated, then undefined*/
    maxRating?: number
    /** Time, when user was last seen online, in unix format. */
    lastOnlineTimeSeconds: number
    registrationTimeSeconds: number
    /** Amount of users who have this user in friends */
    friendOfCount: number
    /** User's avatar URL */
    avatar: string
    /** User's title photo URL */
    titlePhoto: string

    getColor(): Color {
        if (this.rating === undefined)
            return 'black'
        if (this.rating < 1200)
            return 'gray'
        if (this.rating < 1400)
            return 'green'
        if (this.rating < 1600)
            return 'cyan'
        if (this.rating < 1900)
            return 'blue'
        if (this.rating < 2100)
            return 'violet'
        if (this.rating < 2300)
            return 'orange'
        if (this.rating < 2400)
            return 'orange'
        if (this.rating < 2600)
            return 'red'
        if (this.rating < 3000)
            return 'red'
        return 'legendary'
    }

    getColoredHandle() {
        const handle = this.handle
        if (!clc) return handle

        const color = this.getColor()
        if (color == 'legendary') {
            const first = clc.black(handle[0])
            const last = clc.red(handle.substr(1))
            return first + last
        }
        if (color == 'orange')
            return clc.yellow(handle)
        if (color == 'gray')
            return clc.blackBright(handle)
        if (color == 'violet')
            return clc.magenta(handle)
        return clc[color](handle)
    }

    getClass() {
        return `rated-user user-${this.getColor()}`
    }

    getStyledLink(text?: string) {
        return this.getLinkImpl(text, this.getClass())
    }

    getLink(text?: string) {
        return this.getLinkImpl(text)
    }

    private getLinkImpl(text?: string, style?: string) {
        const classStr = style ? `class="${style}"` : ''
        return `<a ${classStr} href="${CODEFORCES_URL}profile/${this.handle}">${text || this.handle}</a>`
    }

    static getColoredHandle(handle: Handle, users: Record<Handle, User>) {
        const user = users[handle]
        if (!user) return handle
        return user.getColoredHandle()
    }
}
