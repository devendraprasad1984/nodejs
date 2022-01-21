const getTimestamp = (): string => {
    return new Date().toISOString()
};

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [info] [${namespace} ${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [info] [${namespace} ${message}]`)
    }
}

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [warn] [${namespace} ${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [warn] [${namespace} ${message}]`)
    }
}

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [error] [${namespace} ${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [error] [${namespace} ${message}]`)
    }
}


const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [debug] [${namespace} ${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [debug] [${namespace} ${message}]`)
    }
}

export default {
    info, debug, error, warn
}