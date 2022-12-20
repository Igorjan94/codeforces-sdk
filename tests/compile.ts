import {API, Types, init} from '../src'
import Codeforces from '../src'
import * as codeforces from '../src'

const debug = initDebug('test');

(async () => {
    debug('test')

    const wwwww = 123 as codeforces.Types.ContestId

    const contestId = 1763 as Types.ContestId
    const blogEntryId = 110245 as Types.BlogEntryId
    const handle = 'Igorjan94' as Types.Handle
    const handles = [handle]
    const tags = ['Implementation']

    const q = await API.user.info({handles})
    console.log(q[0])
    return //Ensure that ----V compiles
    init.readDefaultOptionsFromFile('config.json')

    const comments = (await API.blogEntry.comments({blogEntryId}))
    console.log(comments[0].commentatorHandle)
    const blog = (await API.blogEntry.view({blogEntryId}))
    console.log(blog.authorHandle)

    const hacks = (await API.contest.hacks({contestId}))
    console.log(hacks[0].hacker.members[0].handle)
    const contests = (await API.contest.list())
    console.log(contests[0].preparedBy)
    const gym = (await API.contest.list({gym: true}))
    console.log(gym[0].name)

    const ratingChanges = (await API.contest.ratingChanges({contestId}))
    console.log(ratingChanges[0].handle)
    const s0 = (await API.contest.standings({contestId, from: 1, count: 2}))
    console.log(s0.contest.name, s0.problems[0].name, s0.rows[0].party.members[0].handle)
    const s1 = (await API.contest.standings({contestId, from: 1, handles}))
    const s2 = (await API.contest.standings({contestId, from: 1, count: 2, room: 1}))
    const s3 = (await API.contest.standings({contestId, from: 1, count: 2, showUnofficial: true}))

    const status0 = (await API.contest.status({contestId, from: 1, count: 2}))
    console.log(status0[0].problem.name)
    const status1 = (await API.contest.status({contestId, from: 1, handle}))

    const problems = (await API.problemset.problems({tags}))
    console.log(problems.problems[0].index)
    const problemsetStatus = (await API.problemset.recentStatus({count: 2}))
    
    const recentActions = (await API.recentActions.list({count: 2}))
    console.log(recentActions[0].comment?.commentatorHandle)
    
    const userBlog = (await API.user.blogEntries({handle}))
    console.log(userBlog[0].authorHandle)
    const userInfo = (await API.user.info({handles}))
    console.log(userInfo[0].avatar)
    const users = (await API.user.ratedList())
    console.log(users[0].handle)
    const userRating = (await API.user.rating({handle}))
    console.log(userRating[0].newRating)
    const userStatus = (await API.user.status({handle}))
    console.log(userStatus[0].problem.name)

    const friends = (await API.user.friends())
    console.log(friends[0].toLowerCase())
})()
