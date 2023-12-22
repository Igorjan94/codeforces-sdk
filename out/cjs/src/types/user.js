"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.COLORS = void 0;
const common_1 = require("./common");
exports.COLORS = [
    'black',
    'gray',
    'green',
    'cyan',
    'blue',
    'violet',
    'orange',
    'red',
    'legendary'
];
let clc;
try {
    clc = require('cli-color');
}
catch (e) { }
class User extends common_1.CodeforcesObject {
    getColor() {
        if (this.rating === undefined)
            return 'black';
        if (this.rating < 1200)
            return 'gray';
        if (this.rating < 1400)
            return 'green';
        if (this.rating < 1600)
            return 'cyan';
        if (this.rating < 1900)
            return 'blue';
        if (this.rating < 2100)
            return 'violet';
        if (this.rating < 2300)
            return 'orange';
        if (this.rating < 2400)
            return 'orange';
        if (this.rating < 2600)
            return 'red';
        if (this.rating < 3000)
            return 'red';
        return 'legendary';
    }
    getColoredHandle() {
        const handle = this.handle;
        if (!clc)
            return handle;
        const color = this.getColor();
        if (color == 'legendary') {
            const first = clc.black(handle[0]);
            const last = clc.red(handle.substr(1));
            return first + last;
        }
        if (color == 'orange')
            return clc.yellow(handle);
        if (color == 'gray')
            return clc.blackBright(handle);
        if (color == 'violet')
            return clc.magenta(handle);
        return clc[color](handle);
    }
    getClass() {
        return `rated-user user-${this.getColor()}`;
    }
    getStyledLink(text) {
        return this.getLinkImpl(text, this.getClass());
    }
    getLink(text) {
        return this.getLinkImpl(text);
    }
    getLinkImpl(text, style) {
        const classStr = style ? `class="${style}"` : '';
        return `<a ${classStr} href="${common_1.CODEFORCES_URL}profile/${this.handle}">${text || this.handle}</a>`;
    }
    static getColoredHandle(handle, users) {
        const user = users[handle];
        if (!user)
            return handle;
        return user.getColoredHandle();
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map