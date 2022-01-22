const getTimestamp = (): string => {
    return new Date().toISOString()
};

const info = (message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [info] [${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [info] [${message}]`)
    }
}

const warn = (message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [warn] [${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [warn] [${message}]`)
    }
}

const error = (message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [error] [${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [error] [${message}]`)
    }
}


const debug = (message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimestamp()}] [debug] [${message}]`, object)
    } else {
        console.log(`[${getTimestamp()}] [debug] [${message}]`)
    }
}

export default {
    info, debug, error, warn
}