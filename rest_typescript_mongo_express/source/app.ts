import express from "express";
import config from "./config/default";
import logging from "./config/logging";
import connect from './db/connect'
import appRoutes from './routes'
import exp from "constants";

const port: number = config.port
const host: string = config.host
const namespace = 'app server'

const app = express()
// const router = express.Router()

//app.use is a middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.listen(port, host, () => {
    logging.info(namespace, `server listening at http://${host}:${port}`)
    connect()
    appRoutes(app)
})

