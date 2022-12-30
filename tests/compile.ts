import {API, Types, init} from '../src'
import Codeforces from '../src'
import * as codeforces from '../src'

import {Test} from 'ts-toolbelt'
const {checks, check} = Test

checks([
    check<Awaited<ReturnType<typeof API.blogEntry.comments>>,      Array<Types.Comment>,        Test.Pass>(),
    check<Awaited<ReturnType<typeof API.blogEntry.view>>,          Types.BlogEntry,             Test.Pass>(),
    check<Awaited<ReturnType<typeof API.contest.hacks>>,           Array<Types.Hack>,           Test.Pass>(),
    check<Awaited<ReturnType<typeof API.contest.list>>,            Array<Types.Contest>,        Test.Pass>(),
    check<Awaited<ReturnType<typeof API.contest.ratingChanges>>,   Array<Types.RatingChange>,   Test.Pass>(),
    check<Awaited<ReturnType<typeof API.contest.standings>>,       Types.Standings,             Test.Pass>(),
    check<Awaited<ReturnType<typeof API.contest.status>>,          Array<Types.Submission>,     Test.Pass>(),
    check<Awaited<ReturnType<typeof API.problemset.problems>>,     Types.Problemset,            Test.Pass>(),
    check<Awaited<ReturnType<typeof API.problemset.recentStatus>>, Array<Types.Submission>,     Test.Pass>(),
    check<Awaited<ReturnType<typeof API.recentActions.list>>,      Array<Types.RecentAction>,   Test.Pass>(),
    check<Awaited<ReturnType<typeof API.user.blogEntries>>,        Array<Types.BlogEntryShort>, Test.Pass>(),
    check<Awaited<ReturnType<typeof API.user.friends>>,            Array<Types.Handle>,         Test.Pass>(),
    check<Awaited<ReturnType<typeof API.user.info>>,               Array<Types.User>,           Test.Pass>(),
    check<Awaited<ReturnType<typeof API.user.ratedList>>,          Array<Types.User>,           Test.Pass>(),
    check<Awaited<ReturnType<typeof API.user.rating>>,             Array<Types.RatingChange>,   Test.Pass>(),
    check<Awaited<ReturnType<typeof API.user.status>>,             Array<Types.Submission>,     Test.Pass>(),
])

