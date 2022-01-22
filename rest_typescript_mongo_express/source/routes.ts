import {Express, Request, Response, NextFunction} from 'express'
import simpleLogger from "./config/simpleLogger";

export default function (app: Express) {
    simpleLogger.info('routes invoked')

    app.get('/health-check', (req: Request, res: Response) => {
        return res.send({
            message: 'app health is running fine'
        })
    })


    //register user
    //POST /api/user

    //login
    //POST /api/session

    //get users sessions
    //GET /api/sessions

    //logout

    //DELETE /api/sessions

    //GET /api/posts /api/posts/postid
}