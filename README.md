# codeforces-sdk

Typescript sdk for [codeforces](https://codeforces.com).

## Is it official?

Yes, it makes queries to official [codeforces API](https://codeforces.com/apiHelp).

## Is it unofficial?

Yes, because it's implemented by contestant, not codeforces team.

## Installation

```bash
npm i codeforces-sdk
```

## Documentation

You can use official codeforces API [documentation](https://codeforces.com/apiHelp), but it's easier just use IDE's autocomplete.

From documentation:
> API may be requested at most 1 time per two seconds

Sdk uses this limitation and rate limits requests to API, you don't need to manually sleep after each request.

## Usage

You can use sdk with es-modules:
```typescript
import { Types, API, init } from 'codeforces-sdk'
```

or with commonjs require:
```typescript
const codeforces = require('codeforces-sdk')
```

`API` object has five members: `blogEntry`, `contest`, `problemset`, `recentActions` and `user`.

For example, if you want to execute [contest.standings](https://codeforces.com/apiHelp/methods#contest.standings) method, use `API.contest.standings` function.

This function has one object argument of type `API.contest.StandingsOptions` which is alias to
```typescript
{
    contestId: ContestId
    from: number
    count?: number
    handles?: Handle | Array<Handle>
    room?: number
    showUnofficial?: boolean
}
```

All methods return classes which are one-to-one relation to codeforces objects:
* BlogEntry
* Comment
* Contest
* Hack
* Member
* Party
* Problem
* ProblemResult
* ProblemStatistics
* RanklistRow
* RatingChange
* RecentAction
* Submission
* User

And some more objects:
* Problemset
* Standings

Some objects are extended with extra fields for convenience: I've added `contest: Contest` field in `RanklistRow` and `ProblemResult`.

## Class methods

Majority of classes (where applicable) has `getLink(title)` and `toString()` functions:
```html
>>> user.getLink()
<a  href="https://codeforces.com/profile/Igorjan94">Igorjan94</a>

>>> user.getStyledLink()
<a class="rated-user user-violet" href="https://codeforces.com/profile/Igorjan94">Igorjan94</a>

>>> contest.getLink('Contest')
<a href="https://codeforces.com/contest/1777">Contest</a>
```

## Method arguments

Every API method has exactly one object argument with the same name as method, but CamelCased and appended `Options`: e.g. `contest.list` has `ContestListOptions` argument.

You'll find illogical that, for example, `contest.list` method accepts object `({gym: boolean})` instead of one boolean argument `(gym: boolean)`, but I believe that:
* it's consistent with other methods;
* it's more convenient to explicitly name arguments on caller's side (compare: `list(false)` and `list({gym: false})`. What does `false` mean in first case?);
* if codeforces will add some arguments (e.g. `limit: number`, `from: number`) then sdk will be backward compatible: old code won't break on sdk update.

If you want to proxy function arguments, you can use `MethodNameOptions` types. It's available for every method. For example:
```typescript
const multipleStandings = async (options: Omit<API.contest.StandingsOptions, 'contestId'>, ...contestIds: Array<number>) => {
    for (const contestId of contestIds) {
        const s = await API.contest.standings({
            ...options,
            contestId: contestId as Types.ContestId,
        })
        console.log(s.contest.toString())
    }
}
```

## Type aliases

I use aliases `SomethingId` instead of `number` and `Handle` instead of `string` to avoid messing up function arguments.

For example:
```typescript
const contestId = 1777 as Types.ContestId
const contest = await API.contest.standings({contestId, from: 1, showUnofficial: true})
const handle = contest.rows[0].party.members[0].name
//                                             ^-- by mistake you used `name` instead of `handle`
const users = await API.user.info({handles: [handle]})
//                                           ^-- Type 'string | undefined' is not assignable to type 'Handle'
```
This snippet won't compile. But if we use `string` instead of `Handle` it'll successfully compile and make request to codeforces API.

## Authorization
All methods except `user.friends` allow anauthorized access, but if you want, you can use authorization:
```typescript
import {Types, API, init} from 'codeforces-sdk'

const friendList = async () => {
    // Setup from object
    init.setDefaultOptions({
        key: 'key',
        secret: 'secret',
        lang: 'en',
    })

    // Or read from file (file should contain json like options object above)
    init.readDefaultOptionsFromFile('<path>')

    // Or use CODEFORCES_KEY, CODEFORCES_SECRET and CODEFORCES_LANG env options, for example
    // CODEFORCES_LANG=en node out/scj/src/index.js

    const handles = await API.user.friends()
    console.log(handles)
    
    // Reset authorization
    init.setDefaultOptions({
        key: null,
        secret: null,
    })
}
```

## Example
This example prints users who took part in ALL `contestsIds` and solved at least one problem in each contest ordered by sum of taken places:

```typescript
// Import Types and API from sdk
import { Types, API } from 'codeforces-sdk'

// Declare function with one array argument of ContestId --- alias to number
const mergeContestStandings = async (contestIds: Array<Types.ContestId>) => {

    // Initialize empty map from user's handle to some stat object
    const contestants: Record<Types.Handle, {off: number, unoff: number, both: number, place: number}> = {}

    // Range-based for like in c++
    for (const contestId of contestIds) {

        // Query API method 'contest.standing' with query params
        const contest = await API.contest.standings({contestId, from: 1, showUnofficial: true})

        contest.rows
            // Filter participants who didn't solve any problem
            .filter(row => row.points > 0)
            // And for each other participant
            .forEach(row => {
                // Take participant's handle
                // Codeforces returns participants in array of 1..3 objects
                // Typescript allows you to access 0-th element, because we are sure,
                //   that there is at least one participant, so handle's type will be deduced as `Handle`
                //   Participant [1] and [2] are optional, so row.party.members[1].handle won't compile,
                //   because type of row.party.members[1] is `Member | undefined`
                //   If you are sure, that you some contest always had at least 2 participants,
                //   use `!`: `row.party.members[1]!.handle`
                const handle = row.party.members[0].handle

                // If our map doesn't have handle as key, initialize it with empty value.
                // Unlike c++ empty value in map is `undefined`
                if (!(handle in contestants))
                    contestants[handle] = {
                        both: 0,
                        off: 0,
                        place: 0,
                        // I like trailing comma to minimize git diff and simplify adding new elements
                        unoff: 0,
                    }

                // Now we are sure, than this object exists
                // C++: auto& contestant = contestants[handle]
                //          ^------ note that contestant is reference!
                const contestant = contestants[handle]

                // ParticipantType is enum with string values
                const isOff = row.party.participantType == Types.ParticipantType.CONTESTANT
                const isUnoff = row.party.participantType == Types.ParticipantType.OUT_OF_COMPETITION

                // Update stat
                if (isOff) ++contestant.off
                if (isUnoff) ++contestant.unoff
                if (isOff || isUnoff) {
                    ++contestant.both
                    contestant.place += row.rank
                }
            })
    }

    // Object entries is Array<[key, value]>
    const items = Object.entries(contestants)
        // Filter participants which took part in all contests
        .filter(([_, v]) => v.both == contestIds.length)
        // Extend stat with user's handle
        .map(([k, v]) => ({
            ...v,
            handle: k,
        }))

    // Sort them by place
    // Note that typescript comparator returns negative number when first one is greater, positive when less and zero if equal
    items.sort((a, b) => a.place - b.place)

    // Header line
    console.log('Handle place off unoff')
    // Just output all items
    // `${valiable}` is python's f-string: f'{variable}`
    console.log(items.map(v => `${v.handle} ${v.place} ${v.off} ${v.unoff}`).join('\n'))
}
```

You can find more examples [here](https://github.com/Igorjan94/codeforces-projects).

## Exceptions

Every method can throw error. It throws `CodeforcesError` instance if sdk got request from codeforces and `Error` otherwise (e.g. network timeout).

## Extra

If you want to output colorfull standings and handles in console, you can install [cli-color](https://www.npmjs.com/package/cli-color) and then use `toString({withColor: true})` with `Party`, `ProblemResult` or `User`.

[Example](https://github.com/Igorjan94/codeforces-projects/blob/master/src/standings.ts).

![ Image ](https://github.com/Igorjan94/codeforces-projects/blob/master/data/standings.png?raw=true)

## Tests

Now sdk has only [compile tests](https://github.com/Igorjan94/codeforces-sdk/blob/master/tests/compile.ts#L8): you can verify that all methods return proper type from [documentation](https://codeforces.com/apiHelp/methods).

## Bugs
If you find any bugs (I believe they exist!) feel free to create issue on github or notify anywhere you find me by my nickname `Igorjan94`.

## Future plans

* Implement unofficial methods like
    * Get submission text
    * Get problem samples
    * Get problem statement
    * ...
* Add support to overload used colors
* Runtime tests
* More examples
* ...

## Contributors

* [Igorjan94](https://codeforces.com/profile/Igorjan94)

## Contribution

Fill free to PR or fork this repository!

## LICENSE
MIT

