export declare class CodeforcesError extends Error {
    status: string;
    payload: object;
    constructor(status: string, message?: string, payload?: object);
}
