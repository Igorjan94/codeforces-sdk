export type Float = number & { __unique: 'float' }
export type Handle = string & { __unique: 'handle' }

export type AvailableLanguages = 'en' | 'ru'

export type DefaultApiOptions = {
    lang?: AvailableLanguages
} & ({} | {
    secret: string
    key: string
})

type z = 'abc'[number]
type Letters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'E' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
type Numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type ProblemsetName = 'acmsguru'
export type ProblemIndex = (Letters | `${Letters}${Numbers}` | string) & { __unique: 'ProblemIndex' }

export const CODEFORCES_URL = 'https://codeforces.com/' as const

export class CodeforcesObject<T> {
    constructor(o: T) {
        Object.assign(this, o)
    }
}
