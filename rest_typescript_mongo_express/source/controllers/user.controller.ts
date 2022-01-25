import {Request, Response} from "express";
import {omit} from "lodash";
import {createUser} from "../service/user.service";
import log from "../config/simpleLogger";

//all controllers take (req, res), and would never interact with DB directly
//for that services will be there and this is how
//we have separated API layer logic with DB layer logic
export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), "password"));
    } catch (e: any) {
        log.error("error", e);
        return res.status(409).send('user controller error - ' + e.message + "-->" + e.error);
    }
}
