let getTimestamp = (): string => {
    return new Date().toISOString();
};
const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimestamp()}]  [info] [${namespace}]  ${message}`, object);
    } else {
        console.info(`[${getTimestamp()}]  [info] [${namespace}]  ${message}`, object);
    }
};
const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimestamp()}]  [warn] [${namespace}]  ${message}`, object);
    } else {
        console.warn(`[${getTimestamp()}]  [warn] [${namespace}]  ${message}`, object);
    }
};
const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimestamp()}]  [warn] [${namespace}]  ${message}`, object);
    } else {
        console.error(`[${getTimestamp()}]  [warn] [${namespace}]  ${message}`, object);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimestamp()}]  [debug] [${namespace}]  ${message}`, object);
    } else {
        console.debug(`[${getTimestamp()}]  [debug] [${namespace}]  ${message}`, object);
    }
};

export default {
    info,
    debug,
    error,
    warn
};
