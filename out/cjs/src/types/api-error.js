"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeforcesError = void 0;
class CodeforcesError extends Error {
    status;
    payload;
    constructor(status, message, payload = {}) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        this.payload = payload;
    }
}
exports.CodeforcesError = CodeforcesError;
//# sourceMappingURL=api-error.js.map