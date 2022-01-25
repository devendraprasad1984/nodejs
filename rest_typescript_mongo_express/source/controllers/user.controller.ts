import {Request, Response} from "express";
import {omit} from "lodash";
import {createUser} from "../service/user.service";
import log from "../config/simpleLogger";

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), "password"));
    } catch (e: any) {
        log.error("error", e);
        return res.status(409).send('user controller error - ' + e.message + "-->" + e.error);
    }
}