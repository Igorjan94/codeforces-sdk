export class CodeforcesError extends Error {
    constructor(status, message, payload = {}) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        this.payload = payload;
    }
}
//# sourceMappingURL=api-error.js.map