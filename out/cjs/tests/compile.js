"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const debug = initDebug('test');
(async () => {
    debug('test');
    const wwwww = 123;
    const contestId = 1763;
    const blogEntryId = 110245;
    const handle = 'Igorjan94';
    const handles = [handle];
    const tags = ['Implementation'];
    const q = await src_1.API.user.info({ handles });
    console.log(q[0]);
    return; //Ensure that ----V compiles
    src_1.init.readDefaultOptionsFromFile('config.json');
    const comments = (await src_1.API.blogEntry.comments({ blogEntryId }));
    console.log(comments[0].commentatorHandle);
    const blog = (await src_1.API.blogEntry.view({ blogEntryId }));
    console.log(blog.authorHandle);
    const hacks = (await src_1.API.contest.hacks({ contestId }));
    console.log(hacks[0].hacker.members[0].handle);
    const contests = (await src_1.API.contest.list());
    console.log(contests[0].preparedBy);
    const gym = (await src_1.API.contest.list({ gym: true }));
    console.log(gym[0].name);
    const ratingChanges = (await src_1.API.contest.ratingChanges({ contestId }));
    console.log(ratingChanges[0].handle);
    const s0 = (await src_1.API.contest.standings({ contestId, from: 1, count: 2 }));
    console.log(s0.contest.name, s0.problems[0].name, s0.rows[0].party.members[0].handle);
    const s1 = (await src_1.API.contest.standings({ contestId, from: 1, handles }));
    const s2 = (await src_1.API.contest.standings({ contestId, from: 1, count: 2, room: 1 }));
    const s3 = (await src_1.API.contest.standings({ contestId, from: 1, count: 2, showUnofficial: true }));
    const status0 = (await src_1.API.contest.status({ contestId, from: 1, count: 2 }));
    console.log(status0[0].problem.name);
    const status1 = (await src_1.API.contest.status({ contestId, from: 1, handle }));
    const problems = (await src_1.API.problemset.problems({ tags }));
    console.log(problems.problems[0].index);
    const problemsetStatus = (await src_1.API.problemset.recentStatus({ count: 2 }));
    const recentActions = (await src_1.API.recentActions.list({ count: 2 }));
    console.log(recentActions[0].comment?.commentatorHandle);
    const userBlog = (await src_1.API.user.blogEntries({ handle }));
    console.log(userBlog[0].authorHandle);
    const userInfo = (await src_1.API.user.info({ handles }));
    console.log(userInfo[0].avatar);
    const users = (await src_1.API.user.ratedList());
    console.log(users[0].handle);
    const userRating = (await src_1.API.user.rating({ handle }));
    console.log(userRating[0].newRating);
    const userStatus = (await src_1.API.user.status({ handle }));
    console.log(userStatus[0].problem.name);
    const friends = (await src_1.API.user.friends());
    console.log(friends[0].toLowerCase());
})();
//# sourceMappingURL=compile.js.map