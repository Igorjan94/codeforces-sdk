declare global {
    function initDebug(filename: string): (...args: any[]) => void;
}
export declare const init: {
    readDefaultOptionsFromFile: (filename: string) => void;
    setDefaultOptions: (newOptions: import("./types").DefaultApiOptions) => void;
};
import * as API from './methods';
export * as API from './methods';
export * as Types from './types';
declare const _default: {
    API: typeof API;
    init: {
        readDefaultOptionsFromFile: (filename: string) => void;
        setDefaultOptions: (newOptions: import("./types").DefaultApiOptions) => void;
    };
};
export default _default;
