/* eslint-disable no-unused-vars */

const getKeysFromPath = (path) => {
    return path.split('/').filter(k =>
        k.indexOf(':') === 0
    ).map(k => k.replace(':', ''));
};

const toUnderscore = (input) => {
    return input.replace(/([A-Z])/g, $1 => { return '_' + $1.toLowerCase(); });
};

const getUrlWithUpdatedValues = (path, keys, values) => {
    let url = path;
    if (values) {
        keys.forEach(key => {
            // check if the key exists in camelCase, use it.
            // this will be removed when the routing will be mangaged using option pattern
            if (values[key] !== undefined) {
                url = url.replace(`:${key}`, values[key]);
            } else {
                const snakeCaseKey = toUnderscore(key);
                url = url.replace(`:${key}`, values[snakeCaseKey]);
            }
        });
        return url;
    }
    return '/';
};

const getUrlFromPath = (path, values) => {
    const keys = getKeysFromPath(path);
    const url = getUrlWithUpdatedValues(path, keys, values);
    return url;
};

export const ModuleUtils = {
    toUnderscore, getUrlFromPath
};
