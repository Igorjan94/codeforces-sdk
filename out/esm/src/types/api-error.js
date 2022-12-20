export class CodeforcesError extends Error {
    status;
    payload;
    constructor(status, message, payload = {}) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        this.payload = payload;
    }
}
//# sourceMappingURL=api-error.js.map