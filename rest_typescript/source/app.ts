import express from "express";
import config from "./config/default";
import logging from "./config/logging";
import connect from './db/connect'

const port: number = config.port
const host: string = config.host
const namespace = 'app server'

const app = express()

//app.use is a middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.listen(port, host, () => {
    logging.info(namespace, `server listening at http://${host}:${port}`)
    connect()
})

