import { NextFunction,Request,Response } from "express"

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {

    if (!req.session || !req.session['user'] || !Object.keys(req.session['user']).length) {
        res.status(403).json({
            message: "User not logged in"
        })
    } else {
        next()

    }
}