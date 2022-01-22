import simpleLogger from "./simpleLogger";

const info = (namespace: string, message: string, object?: any) => {
    console.log(`printing for ${namespace}`)
    simpleLogger.info(message, object)
}

const warn = (namespace: string, message: string, object?: any) => {
    console.log(`printing for ${namespace}`)
    simpleLogger.warn(message, object)
}

const error = (namespace: string, message: string, object?: any) => {
    console.log(`printing for ${namespace}`)
    simpleLogger.error(message, object)
}


const debug = (namespace: string, message: string, object?: any) => {
    console.log(`printing for ${namespace}`)
    simpleLogger.debug(message, object)
}

export default {
    info, debug, error, warn
}