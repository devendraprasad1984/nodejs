import {AnySchema} from "yup";
import {Request, Response, NextFunction} from "express";
import log from "../config/simpleLogger";

//this part is also called currying, basically, nested function calls ends up in single function call
const validate = (schema: AnySchema) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        return next();
    } catch (e: any) {
        log.error("error", e);
        return res.status(400).send('validate error ' + e.error + '->' + e.message);
    }
};

export default validate;