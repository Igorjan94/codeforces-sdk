import { CodeforcesObject, Handle } from './common'
import { ContestId } from './contest'

export class RatingChange extends CodeforcesObject<RatingChange> {
    contestId: ContestId
    contestName: string
    handle: Handle
    /** Place of the user in the contest. This field contains user rank on the moment of rating update. If afterwards rank changes (e.g. someone get disqualified), this field will not be update and will contain old rank */
    rank: number
    ratingUpdateTimeSeconds: number
    oldRating: number
    newRating: number
}

