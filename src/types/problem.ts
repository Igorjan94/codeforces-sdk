import { CodeforcesObject, CODEFORCES_URL, Float, ProblemIndex, ProblemsetName } from './common'
import { ContestId } from './contest'

export enum ProblemType {
    PROGRAMMING = 'PROGRAMMING',
    QUESTION = 'QUESTION',
}

export class Problem extends CodeforcesObject<Problem> {
    contestId: ContestId
    problemsetName?: ProblemsetName
    index: ProblemIndex
    name: string
    type: ProblemType
    points?: Float
    rating?: number
    tags: Array<string>

    toString() {
        return this.index as string
    }

    getLink(text?: string) {
        return `<a href="${CODEFORCES_URL}problemset/problem/${this.contestId}/${this.index}">${text ?? this.name}</a>`
    }
}

