"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("./common");
class User extends common_1.CodeforcesObject {
    getLink(text) {
        return `<a href='${common_1.CODEFORCES_URL}profile/${this.handle}'>${text || this.handle}</a>`;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map