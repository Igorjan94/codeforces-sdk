declare global {
    function initDebug(filename: string): (...args: any[]) => void;
}
import * as ImportedAPI from './methods';
export declare const init: {
    readDefaultOptionsFromFile: (filename: string) => void;
    setDefaultOptions: (newOptions: import("./types").DefaultApiOptions) => void;
};
export declare const API: typeof ImportedAPI;
export * as Types from './types';
declare const _default: {
    API: typeof ImportedAPI;
    init: {
        readDefaultOptionsFromFile: (filename: string) => void;
        setDefaultOptions: (newOptions: import("./types").DefaultApiOptions) => void;
    };
};
export default _default;
