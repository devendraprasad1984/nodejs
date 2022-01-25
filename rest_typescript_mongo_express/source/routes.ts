import {Express, Request, Response, NextFunction} from 'express'
import simpleLogger from "./config/simpleLogger";
import validateRequests from "./middleware/validateRequests";
import {createUserHandler} from "./controllers/user.controller";
import {createUserSchema} from "./schema/user.schema";

export default function (app: Express) {
    simpleLogger.info('routes invoked')

    app.get('/health-check', (req: Request, res: Response) => {
        return res.send({
            message: 'app health is running fine'
        })
    })
    //register user
    //POST /api/user
    app.post("/api/users", validateRequests(createUserSchema), createUserHandler);

    //login
    //POST /api/session

    //get users sessions
    //GET /api/sessions

    //logout

    //DELETE /api/sessions

    //GET /api/posts /api/posts/postid
}