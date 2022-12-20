export class CodeforcesError extends Error {
    status: string
    payload: object

    constructor(status: string, message?: string, payload: object = {}) {
        super(message)
        this.name = this.constructor.name
        this.status = status
        this.payload = payload
    }
}

